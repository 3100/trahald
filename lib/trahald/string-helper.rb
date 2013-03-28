# -*- coding: utf-8 -*-

module Trahald
  class StringHelper
    def self.convertToUtf8(ascii)
      ascii.gsub(/\\(\d{3})\\(\d{3})\\(\d{3})/){|m|
        [$1, $2, $3].map{|i| i.oct}.pack("C*")
      }.force_encoding "utf-8"
    end

    def self.convertFilePath(ascii)
      convertToUtf8(ascii).gsub(/"/, "")
    end
  end
end
