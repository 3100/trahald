require_relative "trahald/version"
module Trahald
  require 'sinatra'
  require 'slim'
  require 'redis'
  require 'json'
  require 'uri'

  configure do
    REDIS_URL = "redis://localhost:6379/"
    uri = URI.parse REDIS_URL
    REDIS = Redis.new(
      :host => uri.host,
      :port => uri.port,
      :password => uri.password
    )
  end

  get '/' do
    redirect 'home'
  end

  get '/list' do
    @keys = REDIS.keys
    slim :list
  end

  get '/:name' do
    @name = params[:name]
    @body = REDIS.get(params[:name])
    if @body
      slim :page
    else
      @body = ""
      slim :edit
    end
  end

  get '/:name/edit' do
    @name = params[:name]
    @body = REDIS.get(params[:name])
    slim :edit
  end

  post '/:edit' do
    REDIS.set(params[:name], params[:body])
    @name = params[:name]
    @body = params[:body]
    redirect "/#{@name}"
  end
end
