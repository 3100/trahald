# -*- coding: utf-8 -*-
require_relative "trahald/version"
require_relative "trahald/git"

module Trahald
  require 'sinatra'
  require 'slim'
  require 'json'
  require 'uri'
  require 'sass'

  configure do
    dir = Dir::pwd + "/data"
    GIT = Git.new(dir)
  end

  get '/' do
    redirect 'home'
  end

  get '/style.css' do
    scss :style
  end

  get '/list' do
    @keys = GIT.list
    slim :list
  end

  get %r{^/(.+?)/edit$} do
    puts "edit"
    puts params[:captures]
    @name = params[:captures][0]
    @body = GIT.body(@name)
    @body = "" unless @body
    slim :edit
  end

  get %r{^/(.+?)$} do
    puts params[:captures]
    @name = params[:captures][0]
    @body = GIT.body(@name)
    puts "body:#{@body}"
    if @body
      slim :page
    else
      @body = ""
      slim :edit
    end
  end

  post %r{^/(.+?)$} do
    @name = params[:name]
    @body = params[:body]
    if params[:comment]
      @message = params[:comment]
    else
      @message = "update"
    end

    if GIT.add!(@name, @body)
      GIT.commit!(@message)
    end

    redirect "/#{@name}"
  end
end
