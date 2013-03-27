# -*- coding: utf-8 -*-
module Trahald
  class Summary
    attr_reader :name, :imgs, :body, :date
    def initialize(name, imgs, body, date)
      @name = name
      @imgs = imgs
      @body = body
      @date = date
    end

    def to_h
      {
        :name => @name,
        :imgs => @imgs,
        :body => @body,
        :date => @date
      }
    end

    def to_json
      JSON.generate to_h
    end

    def Summary.from_json(json)
      begin
        h = JSON.parse json
        Summary.new(h["name"], h["imgs"], h["body"], h["date"])
      rescue exception
        "Json parse error."
      end
    end
  end
end

