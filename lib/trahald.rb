# -*- coding: utf-8 -*-
require_relative "trahald/article"
require_relative "trahald/backend-base"
require_relative "trahald/markdown-body"
require_relative "trahald/string-helper"
require_relative "trahald/summary"
require_relative "trahald/summary-file"
require_relative "trahald/summary-redis"
require_relative "trahald/version"

module Trahald
  require 'digest/sha2'
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
      DB = RedisClient.new ENV["TRAHALD_REDIS_URL"]
    end

    configure do
      UPLOAD = "upload"
      UPLOAD_DIR = "#{Dir::pwd}/lib/public/#{UPLOAD}"
      UPLOAD_LIMIT_SIZE = 2000000 # 2MB
      Dir::mkdir UPLOAD_DIR unless FileTest.exist? UPLOAD_DIR
      DELETE_KEY = ENV["TRAHALD_DELETE_KEY"] ? ENV["TRAHALD_DELETE_KEY"] : "trahald"
      puts DELETE_KEY

    end

    helpers do
      def request_headers
        env.inject({}){|acc, (k,v) | acc[$1.downcase] = v if k =~ /^http_(.*)/i; acc}
      end

      def h(text)
        Rack::Utils.escape_html text
      end

      def sha(text)
        Digest::SHA512.digest(text)
      end

      def valid_delete_key?(text)
        sha(text) == sha(DELETE_KEY)
      end
    end

    before do
      cache_control :public, :no_cache, :max_age => 10
      #expires 500, :public, :must_revalidate
    end

    get '/' do
      #redirect 'home'
      redirect 'summary'
    end

    get '/list' do
      last_modified DB.last_modified
      @name = "list"
      @title = "ページ一覧"
      @keys = DB.list
      slim :list
    end

    get '/summary' do
     last_modified DB.last_modified
     @name = "summary" # not used
     @title = "summary" # not used
     @data = DB.data.sort_by{|d| d.date}.reverse
     slim :summary
    end

    get '/uploads' do
      @name = "uploads"
      @title = "添付画像一覧"
      @keys = Dir::glob("#{UPLOAD_DIR}/**/*.{gif,jpg,jpeg,png}").map{|f| "#{UPLOAD}/#{File.basename(f)}"}
      slim :list
    end

    get '/css/style.css' do
      scss :style
    end

    get '/css/print.css' do
      scss :print
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

    get '/new' do
      slim :edit
    end

    get %r{^/(.+?)/edit$} do
      puts "edit"
      puts params[:captures]
      @name = params[:captures][0]
      @body = DB.body(@name)
      @body = "" unless @body
      slim :edit
    end

    get %r{^/(.+?)/delete$} do
      puts "delete"
      puts params[:captures]
      @name = params[:captures][0]
      @try_count=1
      slim :delete
    end

    get %r{^/(.+?)\.md$} do
      puts "md"
      puts params[:captures]
      @name = params[:captures][0]
      @body =  h DB.body(@name)
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
      article = DB.article(@name)
      if article
        last_modified article.date
        # 利用する際にmd内のHTMLをエスケープする
        @body = Kramdown::Document.new(h(article.body), :input => 'markdown').to_html
        @date = article.date
        @tab = slim :tab
        slim :page
      else
        @body = ""
        slim :edit
      end
    end

    # 編集時にはHTMLタグをエスケープせずに保存する
    post "/edit" do
      @name = params[:name].strip # remove spaces, tabs, etc.
      redirect "/" if @name.nil? or @name.empty?
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

    post "/delete" do
      @name = params[:name].strip # remove spaces, tabs, etc.
      pass = params[:password]
      unless valid_delete_key?(pass)
        @error = 'Invalid key.'
        @try_count = params[:count].to_i + 1
        slim :delete
      else
        redirect "/" if @name.nil? or @name.empty?
        @message = "delete #{@name}"

        if DB.delete(@name)
          DB.commit!(@message)
        end
        redirect "/"
      end
    end

    post "/upload" do
      header = request_headers
      data = request.body.read
      name = header["x_file_name"]
      size = header["x_file_size"].to_i
      halt(400, "Invalid request. (Maybe filetype is forbidden.)") unless name
      halt(400, "Only gif, jpg, png file is enable.") unless ['png', 'jpg', 'jpeg', 'gif'].include? name.split('.').last.downcase
      filepath = UPLOAD_DIR +  "/" + name.downcase
      halt(423, "File has already existed.") if File.exist? filepath
      halt(413, "File size is too big.") if size > UPLOAD_LIMIT_SIZE
      begin
        File.open(filepath, "w") do |f|
          f.write(data)
        end
      rescue Exception
        halt(403, "File can not be written. ")
      end
      halt 200
    end

    run! if $0 == __FILE__
  end
end

