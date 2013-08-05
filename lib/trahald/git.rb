# -*- coding: utf-8 -*-

module Trahald
  require 'grit'

  class Git < BackendBase
    UNIT = 50
    SUMMARY_FILE = "summary.dat"
    SUMMARY_MAX = 50

    def initialize(repo_path, ext="md")
      @repo_dir = repo_path
      @ext = ext
      @summary_file = SummaryFile.new(@repo_dir + "/" + SUMMARY_FILE, SUMMARY_MAX)

      Grit::Git.git_timeout = 30
    end

    def article(name)
      #puts "** article **"
      path = "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
      #puts "target: " +  path
      skip = 0
      tail = UNIT
      commit = nil
      count = repo.commit_count
      #puts "count: " + count.to_s
      return nil if count == 0
      while skip < count do
        #split because repo.commits('master', false) often causes SystemStackError.
        commit = repo.commits('master', tail, skip).find{|c|
          #puts "cand: " + c.diffs.first.b_path.force_encoding("ASCII-8BIT")
          next unless c.diffs.first
          c.diffs.first.b_path.force_encoding("ASCII-8BIT") == path
        }
        break if commit
        skip = tail
        tail += UNIT
      end
      return nil unless commit
      return nil unless commit.diffs.first.b_blob
      Article.new(
        name,
        commit.diffs.first.b_blob.data.force_encoding("UTF-8"),
        commit.date
      )
    end

    def add!(name, body)
      return false if body.empty?
      path = file_path(name)
      FileUtils.mkdir_p File.dirname(path)
      begin
        File.open(path, 'w'){|f| f.write(body)}
        Dir.chdir(@repo_dir){
          repo.add file_git_name(name)
        }
        true
      rescue => exception
        puts exception
        false
      end
    end

    def delete(name)
      path = file_path(name)
      return false unless File.exist?(path)
      repo.remove file_git_name(name)
      true
    end

    def body(name)
      a = article(name)
      if a; a.body else nil end
    end

    def commit!(message)
      commit = repo.commit_index(message.force_encoding("ASCII-8BIT"))
      if commit
        md = create_markdown_body(first_commit)
        summary = md ? md.summary : nil
        @summary_file.update(summary)
      else
        false
      end
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
      #tree.blobs.select{|blob|
      #  blob.deleted = false
      #}.each{|blob|
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
#      puts "create"
#      repo.commits('master', max).each{|a|
#        p "** commit **"
#        a.diffs.each{|d|
#          p "- diff -"
#          p d
#        }
#      }

      #experimental
      # commitsが最新順に並んでいる前提で書かれている
      # a_pathがあってb_blobがないものは削除されているので除外できる
      summaries = repo.commits('master', max).select{|c|
        c.diffs.first != nil
      }.uniq{|c|
        c.diffs.first.a_path
      }.select{|c|
        c.diffs.first.b_blob
      }.map{|c|
        create_markdown_body(c).summary
      }
      @summary_file.write(summaries)
      summaries
    end

    def create_markdown_body(commit)
      first = commit.diffs.first
      path = ''
      data = ''
      return nil unless first # test
      if first.b_blob && first.b_blob.data
        path = first.b_path.force_encoding("UTF-8")
        data = first.b_blob.data.force_encoding("UTF-8")
      else
        path = first.a_path.force_encoding("UTF-8")
        data = ''
      end
      MarkdownBody.new(
        path.slice(0, path.size - (@ext.size+1)),
        data,
        commit.date
      )
    end

    def file_path(name)
      "#{@repo_dir}/#{name}.#{@ext}"
    end

    def file_git_name(name)
      "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
    end

    def repo
     @repo ||= Grit::Repo.new @repo_dir
    end

    def self.init_repo(dir)
      Grit::Repo.init dir
    end
  end
end
