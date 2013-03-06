# -*- coding: utf-8 -*-
require_relative "trahald/version"
require_relative "trahald/git"
require 'sinatra/base'

module Trahald
  require 'kramdown'
  require 'json'
  require 'sass'
  require 'sinatra/base'
  require 'slim'
  require 'uri'

  class App < Sinatra::Base

    configure do
      dir = Dir::pwd + "/data"
      Git::init_repo_if_needed dir
      GIT = Git.new dir
    end

    get '/' do
      redirect 'home'
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

    get %r{^/(.+?)\.md$} do
      puts "md"
      puts params[:captures]
      @name = params[:captures][0]
      @body = GIT.body(@name)
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
      @body = GIT.body(@name)
      puts "body:#{@body}"
      @style = scss :style
      puts "style:#{@style}"
      if @body
        @body = Kramdown::Document.new(@body).to_html
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

      if GIT.add!(@name, @body)
        GIT.commit!(@message)
      end

      puts @name
      redirect "/#{URI.escape(@name)}"
    end

    run! if $0 == __FILE__
  end
end

