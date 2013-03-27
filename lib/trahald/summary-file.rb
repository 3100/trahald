# -*- coding: utf-8 -*-
module Trahald
  # For saving summary data to improve the performance of summary page.
  class SummaryFile
    def initialize(file_path, max)
      @path = file_path
      @max = max
      @data = nil
    end

    def read(max=@max)
      return @data if @data
      return nil unless File.exist? @path
      body = nil
      File.open(@path, 'r'){|f| body = f.read }
      JSON.parse(body).map{|s| Summary.from_json s}
    end

    def write(summaries)
      body = summaries.map{|s| s.to_json}.to_json
      FileUtils.mkdir_p File.dirname(@path)
      begin
        File.open(@path, 'w'){|f| f.write(body)}
        @data = summaries
        true
      rescue => exception
        puts exception
        false
      end
    end

    def update(summary, max=@max)
      summaries = read(max)
      return false unless summaries
      summaries.reject!{|s| s.name == summary.name}
      summaries.unshift summary
      write summaries
    end

  end
end
