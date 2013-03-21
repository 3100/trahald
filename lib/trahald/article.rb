# -*- coding: utf-8 -*-
module Trahald
  require 'json'

  class Article
    attr_reader :name, :body, :date
    def initialize(name, body, date)
      @name = name
      @body = body
      @date = date
    end

    def to_h
      {
        :name => @name,
        :body => @body,
        :date => @date
      }
    end

    def to_json
      JSON.generate to_h
    end

    def Article.from_json(json)
      begin
        h = JSON.parse json
        Article.new(h[:name], h[:body], h[:date])
      rescue exception
        "Json parse error."
      end
    end
  end
end
