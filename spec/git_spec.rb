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

  it "should enable to add and commit some files." do
    name1 = "sample"
    body1 = "# title\n\n* hoge\n* huga\n* 123"
    name2 = "サンプル"
    body2 = "# タイトル\n\n* いち\n* に\n* さん"
    name3 = "サンプル/初夢"
    body3 = "# タイトル\n\n* 富士\n* 鷹\n* なすび"
    @git.add!(name1, body1)
    @git.add!(name2, body2)
    @git.add!(name3, body3)
    message = "コミット"

    @git.commit!(message).should be_true
    @git.body(name1).should == body1
    @git.body(name2).should == body2
    @git.body(name3).should == body3
  end

  it "should enable to output list." do
    @git.list.should == ['sample', 'サンプル', 'サンプル/初夢']
  end

  after(:all) do
    if FileTest.exist? @dir
      Dir.glob(@dir + '/**/').each{|e|
        puts e}
      FileUtils.rm_rf(Dir.glob(@dir + '/**/'))
    end
  end
end
    

