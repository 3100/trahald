# -*- coding: utf-8 -*-
require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe "Trahald::RedisClient" do
  before(:all) do
    @url = "redis://localhost:6379/"
    @redis = Trahald::RedisClient.new(@url)
    @redis.flush!
  end

  it_behaves_like 'backend db' do
    let(:db) { @redis }
  end

  it "should enable to flush data" do
    @redis.flush!
    @redis.list.should == []
  end

  after(:all) do
  end
end


