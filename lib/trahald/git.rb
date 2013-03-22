# -*- coding: utf-8 -*-

module Trahald
  require 'grit'

  class Git < BackendBase
    def initialize(repo_path, ext="md")
      @repo_dir = repo_path
      @ext = ext
    end

    def article(name)
      commit = repo.commits('master', false).find{|c|
        c.diffs.first.b_path.force_encoding("ASCII-8BIT") == "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
      }
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

    #experimental
    def body(name)
      a = article(name)
      if a; a.body else nil end
    end

    def body_old(name)
      first = first_commit
      return nil unless first

      d = dirs(name)
      tree = first.tree
      file = tree / "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
      return nil unless file
      file.data.force_encoding("UTF-8")
    end

    def commit!(message)
      repo.commit_index(message)
    end

    # experimental
    def data
      first = first_commit
      return [] unless first
      summary 50
    end

    def list
      first = first_commit
      return [] unless first
      list = []
      files('', first.tree, list)
      list.sort
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
    def summary(max=false)
      repo.commits('master', max).map{|commit|
        path = commit.diffs.first.b_path.force_encoding("UTF-8")
        MarkdownBody.new(
          path.slice(0, path.size - (@ext.size+1)),
          commit.diffs.first.b_blob.data.force_encoding("UTF-8"),
          commit.date
        ).summary
      }.uniq{|i| i.name}
    end

    def repo
     @repo ||= Grit::Repo.new @repo_dir
    end

    def self.init_repo(dir)
      Grit::Repo.init dir
    end
  end
end
