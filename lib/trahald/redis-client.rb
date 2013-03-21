# -*- coding: utf-8 -*-

module Trahald
  require 'redis'
  require 'uri'

  class RedisClient < BackendBase

    def initialize(url)
      @redis = Redis.new(:url => url)
      @params = Hash.new
    end

    def article(name)
      json = @redis.zrange(name, -1, -1).first # nil unless zrange(..).any?
      if json; Article.from_json(json) else nil end
    end

    # This method does not set data to Redis DB. To confirm, use commit! after add!.
    def add!(name, body)
      @params[name] = body
    end

    def body(name)
      a = article name
      if a; a.body else nil end
    end

    # message is not used.
    def commit!(message)
      date = Time.now
      @params.each{|name, body|
        json = Article.new(name, body, date).to_json
        zcard = @redis.zcard name
        @redis.zadd name, zcard+1, json
        #@redis.set(name, body)
      }
    end

    # CAUTION! This method flush data on current db.
    def flush!
      @redis.flushdb
    end

    def data
      @redis.keys.map do |name|
        a = article name 
        MarkdownBody.new(name, a.body, a.date).summary
      end
    end

    def list
      @redis.keys.sort
    end

    def self.init_repo_if_needed(dir)
      # do nothing.
    end
  end
end


