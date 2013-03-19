# -*- coding: utf-8 -*-

module Trahald
  require 'kramdown'
  require 'sanitize'

  class MarkdownBody
    MAX_TEXT_SIZE = 160
    SUMMARY = Struct.new("Summary", :name, :img, :text) # TODO :date

    def initialize(name, body)
      @name = name
      @body = body
    end

    def pre 
      raw = Sanitize.clean Kramdown::Document.new(@body).to_html
      if raw.size > MAX_TEXT_SIZE 
        raw[0, MAX_TEXT_SIZE] + "..."
      else
        raw
      end
    end

    def img_src
      pattern = Regexp.new '!\[.+\]\((.+)\)'
      raw = @body.split('\n')
      raw.each do |r|
        return $1 if pattern =~ r
      end
      nil
    end

    def summary
      SUMMARY.new(
        @name,
        img_src,
        pre
      )
    end
  end
end

