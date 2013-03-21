# -*- coding: utf-8 -*-

module Trahald
  require 'kramdown'
  require 'sanitize'

  class MarkdownBody
    MAX_TEXT_SIZE = 160
    Summary = Struct.new("Summary", :name, :imgs, :body, :date)

    def initialize(name, body, date)
      @name = name
      @body = body
      @date = date
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
      raw.map{|r|
        $1 if pattern =~ r
      }.select{|i| i}
    end

    def summary
      Summary.new(
        @name,
        img_src,
        pre,
        @date
      )
    end
  end
end

