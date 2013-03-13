# -*- coding: utf-8 -*-
require_relative "trahald/backend-base"
require_relative "trahald/version"

module Trahald
  require 'kramdown'
  require 'json'
  require 'sass'
  require 'sinatra/base'
  require 'slim'
  require 'uri'

  class App < Sinatra::Base

    configure :test do
      require_relative "trahald/git"
      require_relative "trahald/redis-client"
    end

    configure :production, :development, :git do
      require_relative "trahald/git"
      dir = Dir::pwd + "/data"
      Git::init_repo_if_needed dir
      DB = Git.new dir
    end

    configure :redis do
      require_relative "trahald/redis-client"
      url = "redis://localhost:6379"
      DB = RedisClient.new url
    end

    get '/' do
      redirect 'home'
    end

    get '/list' do
      @name = "list"
      @keys = DB.list
      slim :list
    end
    
    get %r{^/(.+?)/slide$} do
      puts "slide"
      puts params[:captures]
      @name = params[:captures][0]
      @body = DB.body(@name)
      puts @body
      if @body
        slim :slide, :layout => :raw_layout
      else
        @body = ""
        slim :edit
      end
    end

    get %r{^/(.+?)/edit$} do
      puts "edit"
      puts params[:captures]
      @name = params[:captures][0]
      @body = DB.body(@name)
      @body = "" unless @body
      slim :edit
    end

    get %r{^/(.+?)\.md$} do
      puts "md"
      puts params[:captures]
      @name = params[:captures][0]
      @body = DB.body(@name)
      puts @body
      if @body
        slim :raw, :layout => :raw_layout
      else
        @body = ""
        slim :edit
      end
    end

    get %r{^/(.+?)$} do
      puts params[:captures]
      @name = params[:captures][0]
      @body = DB.body(@name)
      if @body
        @body = Kramdown::Document.new(@body).to_html
        @tab = slim :tab
        slim :page
      else
        @body = ""
        slim :edit
      end
    end

    post "/edit" do
      @name = params[:name]
      @body = params[:body]
      puts "name,body:#{@name},#{@body}"
      if params[:comment]
        @message = params[:comment]
      else
        @message = "update"
      end

      if DB.add!(@name, @body)
        DB.commit!(@message)
      end

      puts @name
      redirect "/#{URI.escape(@name)}"
    end

    run! if $0 == __FILE__
  end
end

