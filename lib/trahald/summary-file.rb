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
      summaries ||= []
      if summary
        summaries.reject!{|s| s.name == summary.name}
        # TODO summaryはなぜか末尾に"\n"が入っているのでchompしている
        summaries.unshift summary unless summary.body.chomp.empty?
      end
      write summaries
    end
  end
end
