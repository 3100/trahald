# -*- coding: utf-8 -*-

module Trahald
  require 'grit'

  class Git < BackendBase
    UNIT = 50
    SUMMARY_PATH = Dir::pwd + "/summary.dat"
    SUMMARY_MAX = 50

    def initialize(repo_path, ext="md")
      @repo_dir = repo_path
      @ext = ext
      @summary_file = SummaryFile.new(SUMMARY_PATH, SUMMARY_MAX)

      Grit::Git.git_timeout = 30
    end

    def article(name)
      puts "** article **"
      path = "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
      puts "target: " +  path
      skip = 0
      tail = UNIT
      commit = nil
      count = repo.commit_count
      puts "count: " + count.to_s
      return nil if count == 0
      while skip < count do
        #split because repo.commits('master', false) often causes SystemStackError.
        commit = repo.commits('master', tail, skip).find{|c|
          puts "cand: " + c.diffs.first.b_path.force_encoding("ASCII-8BIT")
          c.diffs.first.b_path.force_encoding("ASCII-8BIT") == path
        }
        break if commit
        skip = tail
        tail += UNIT
      end
      return nil unless commit

      Article.new(
        name,
        commit.diffs.first.b_blob.data.force_encoding("UTF-8"),
        commit.date
      )
    end

    def add!(name, body)
      path = "#{@repo_dir}/#{name}.#{@ext}"
      FileUtils.mkdir_p File.dirname(path)
      begin
        File.open(path, 'w'){|f| f.write(body)}
        Dir.chdir(@repo_dir){
          repo.add "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
        }
        true
      rescue => exception
        puts exception
        false
      end
    end

    def body(name)
      a = article(name)
      if a; a.body else nil end
    end

    def commit!(message)
      repo.commit_index(message.force_encoding("ASCII-8BIT")) &&
        @summary_file.update(create_markdown_body(first_commit).summary)
    end

    def data
      first = first_commit
      return [] unless first
      res = @summary_file.read
      if res; res else create 50 end
    end

    def last_modified
      if first_commit; first_commit.date else Time.now end
    end

    def list
      repo.git.ls_files.split("\n").map{|f|
        StringHelper.convertFilePath(f).gsub(/\.#{@ext}/, "")
      }.sort
    end

    def self.init_repo_if_needed(dir)
     init_repo(dir) unless FileTest.exist? dir
    end

    private
    def dirs(name)
      d = name.split(/\/+/)
      d.pop #pop basename
      d
    end

    def first_commit
      return nil unless repo.commits.any?
      repo.commits.first
    end

    def files(pos, tree, list)
      tree.blobs.each{|blob|
        puts blob.name
        list.push pos + File.basename(blob.name.force_encoding("UTF-8"), ".#{@ext}")
      }
      tree.trees.each{|t|
        puts t.name
        files "#{pos}#{t.name.force_encoding("UTF-8")}/",  t, list
      }
    end

    # args:
    #   max: number of commits gotten. if max is false, all commits are gotten.
    def create(max=false)
      puts "create"
      summaries = repo.commits('master', max).uniq{|c| c.diffs.first.b_path}.map{|commit|
        create_markdown_body(commit).summary
      }
      @summary_file.write(summaries)
      summaries
    end

    def create_markdown_body(commit)
      path = commit.diffs.first.b_path.force_encoding("UTF-8")
      MarkdownBody.new(
        path.slice(0, path.size - (@ext.size+1)),
        commit.diffs.first.b_blob.data.force_encoding("UTF-8"),
        commit.date
      )
    end

    def repo
     @repo ||= Grit::Repo.new @repo_dir
    end

    def self.init_repo(dir)
      Grit::Repo.init dir
    end
  end
end
