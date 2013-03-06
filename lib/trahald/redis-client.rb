# -*- coding: utf-8 -*-

module Trahald
  require 'redis'
  require 'uri'

  class RedisClient
    def initialize(url)
      uri = URI.parse url
      @redis = Redis.new(
        :host => uri.host,
        :port => uri.port
      )

      @params = Hash::new
    end

    # This method does not set data to Redis DB. To confirm, use commit! after add!.
    def add!(name, body)
      @params[name] = body
    end

    def body(name)
      @redis.get name
    end

    # message is not used.
    def commit!(message)
      @params.each{|name, body|
        @redis.set(name, body)
      }
    end

    # CAUTION! This method flush data on current db.
    def flush!
      @redis.flushdb
    end

    def list
      @redis.keys.sort
    end

    def self.init_repo_if_needed(dir)
      # do nothing.
    end
  end
end


