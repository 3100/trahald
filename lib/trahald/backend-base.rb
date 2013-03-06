# -*- coding: utf-8 -*-

module Trahald
  class BackendBase
    def initialize
    end

    def add!(name, body)
      raise "Called abstract method: add!"
    end

    def body(name)
      raise "Called abstract method: body"
    end

    def commit!(message)
      raise "Called abstract method: commit!"
    end

    def list
      raise "Called abstract method: list"
    end

    def self.init_repo_if_needed(dir)
      raise "Called abstract method: self.init_repo_if_needed"
    end
  end
end


