# -*- coding: utf-8 -*-

module Trahald
  require 'redis'
  require 'uri'

  class RedisClient < BackendBase
    # track all page names.
    KEY_SET = ".keys" # TODO: this must not be collided with any page names.

    # for using cache.
    MODIFIED_DATE = ".modified" # TODO: same
    SUMMARY_KEY = ".summary"

    def initialize(url)
      @redis = Redis.new(:url => url)
      @pages = Hash.new
      @summary_redis = SummaryRedis.new(@redis, SUMMARY_KEY, 50)
    end

    def article(name)
      json = @redis.zrange(name, -1, -1).first # nil unless zrange(..).any?
      if json; Article.from_json(json) else nil end
    end

    # This method does not set data to Redis DB. To confirm, use commit! after add!.
    def add!(name, body)
      @status_add[name] = body
    end

    def body(name)
      a = article name
      if a; a.body else nil end
    end

    def delete(name)
      latest_rank = @redis.zcard name
      return false if latest_rank == 0
      @remove_add[name] = latest_rank
    end

    # message is not used.
    def commit!(message)
      date = Time.now
      @status_add.each{|name, body|
        json = Article.new(name, body, date).to_json
        zcard = @redis.zcard name
        @redis.zadd name, zcard+1, json
        @redis.sadd KEY_SET, name
        @summary_redis.update MarkdownBody.new(name, body, date).summary
      }
      @remove_add.each{|name, latest_rank|
        @redis.zremrange(name, 0, latest_rank)
      }
      @redis.set MODIFIED_DATE, date.to_s
    end

    # CAUTION! This method flush data on current db.
    def flush!
      @redis.flushdb
    end

    def data
      summaries = @summary_redis.read
      if summaries; summaries else create_summary end
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

    private
    def create_summary
      summaries = @redis.smembers(KEY_SET).map do |name|
        a = article name
        MarkdownBody.new(name, a.body, a.date).summary
      end
      @summary_redis.write summaries
      summaries
    end
  end
end


