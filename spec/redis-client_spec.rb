# -*- coding: utf-8 -*-
require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe "Trahald::RedisClient" do
  before(:all) do
    @url = "redis://192.168.5.28:6379/"
    @redis = Trahald::RedisClient.new(@url)
    @redis.flush!
  end

  it "should contains no data at first" do
    @redis.list.should == []
  end

  it "should enable to save some data." do
    name1 = "sample"
    body1 = "# title\n\n* hoge\n* huga\n* 123"
    name2 = "サンプル"
    body2 = "# タイトル\n\n* いち\n* に\n* さん"
    name3 = "サンプル/初夢"
    body3 = "# タイトル\n\n* 富士\n* 鷹\n* なすび"
    @redis.add!(name1, body1)
    @redis.add!(name2, body2)
    @redis.add!(name3, body3)
    message = "コミット"

    @redis.commit!(message).should be_true
    @redis.body(name1).should == body1
    @redis.body(name2).should == body2
    @redis.body(name3).should == body3
  end

  it "should enable to output list." do
    @redis.list.should == ['sample', 'サンプル', 'サンプル/初夢']
  end

  it "should enable to flush data" do
    @redis.flush!
    @redis.list.should == []
  end

  after(:all) do
  end
end


