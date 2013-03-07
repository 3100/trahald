# -*- coding: utf-8 -*-
require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe "Trahald::Git" do
  before(:all) do
    @dir = File.expand_path(File.dirname(__FILE__) + '/repos_for_spec')
    @git = Trahald::Git.new(@dir)
  end

  it "should get new repos if it does not exist." do
    FileTest.exist?(@dir).should be_false
    Trahald::Git.init_repo_if_needed @dir
    FileTest.exist?(@dir).should be_true
  end

  it_behaves_like 'backend db' do
    let(:db) { @git }
  end

  after(:all) do
    if FileTest.exist? @dir
      FileUtils.rm_rf(Dir.glob(@dir + '/**/'))
    end
  end
end
    

