# -*- coding: utf-8 -*-

module Trahald

  require 'grit'

  class Git
    def initialize(repo_path, ext="md")
      @repo_dir = repo_path
      @ext = ext
      Grit::Repo.init(@repo_dir) unless FileTest.exist?(@repo_dir)
      @repo = Grit::Repo.new(@repo_dir)
    end

    def add!(name, body)
      path = "#{@repo_dir}/#{name}.#{@ext}"
      FileUtils.mkdir_p File.dirname(path)
      begin
        File.open(path, 'w'){|f| f.write(body)}
        Dir.chdir(@repo_dir){
          @repo.add "#{name}.#{@ext}"
        }
        true
      rescue => exception
        puts exception
        false
      end
    end

    def body(name)
      first = first_commit
      return nil unless first

      d = dirs(name)
      tree = first.tree
      file = tree / "#{name}.#{@ext}".force_encoding("ASCII-8BIT")
      return nil unless file
      file.data.force_encoding("UTF-8")
    end

    def commit!(message)
      @repo.commit_index(message)
    end

    def list
      first = first_commit
      return [] unless first
      list = []
      files('', first.tree, list)
      list.sort
    end

    #private
    def first_commit
      @repo.commits.first
    end

    def dirs(name)
      d = name.split(/\/+/)
      d.pop #pop basename
      d
    end

    def files(pos, tree, list)
      tree.blobs.map{|blob|
        list.push pos + File.basename(blob.name.force_encoding("UTF-8"), ".#{@ext}")
      }
      tree.trees.each{|t|
        files "#{pos}#{t.name.force_encoding("UTF-8")}/",  t, list
      }
    end
  end
end