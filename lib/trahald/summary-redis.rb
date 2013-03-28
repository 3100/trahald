# -*- coding: utf-8 -*-
module Trahald
  class SummaryRedis < SummaryFile
    # @max is not used.
    def initialize(redis, key, max)
      @redis = redis
      @key = key
      @max = max
      @data = nil
    end

    def read(max=@max)
      return @data if @data
      body = @redis.get @key
      return nil unless body
      JSON.parse(body).map{|s| Summary.from_json s}
    end

    def write(summaries)
      body = summaries.map{|s| s.to_json}.to_json
      @redis.set @key, body
    end

    def update(summary, max=@max)
      super
    end
  end
end

