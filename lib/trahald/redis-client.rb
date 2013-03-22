# -*- coding: utf-8 -*-

module Trahald
  require 'redis'
  require 'uri'

  class RedisClient < BackendBase
    # track all page names.
    KEY_SET = ".keys" # TODO: this must not be collided with any page names.

    # for using cache.
    MODIFIED_DATE = ".modified" # TODO: same

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
      @redis.sadd KEY_SET, name
      @redis.set MODIFIED_DATE, date.to_s
    end

    # CAUTION! This method flush data on current db.
    def flush!
      @redis.flushdb
    end

    def data
      @redis.smembers(KEY_SET).map do |name|
        a = article name
        MarkdownBody.new(name, a.body, a.date).summary
      end
    end

    def last_modified
      date = @redis.get(MODIFIED_DATE)
      if date; Time.parse date else Time.now end
    end

    def list
      @redis.smembers(KEY_SET).sort
    end

    def self.init_repo_if_needed(dir)
      # do nothing.
    end
  end
end


