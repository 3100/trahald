# -*- coding: utf-8 -*-

shared_examples 'backend db' do
  it "should contains no data at first" do
    db.list.should == []
  end

  it "should enable to add and commit a file" do
    message = "コミット"
    name1 = "sample"
    body1 = "# title\n\n* hoge\n* huga\n* 123"
    #puts "before add!"
    db.add!(name1, body1).should be_true
    #puts "added"
    db.commit!(message).should be_true
    #puts "comitted"
    db.body(name1).should == body1
  end

  it "should enable to add and commit an another file" do
    sleep 2
    message = "コミット"
    name2 = "サンプル"
    body2 = "# タイトル\n\n* いち\n* に\n* さん"
    db.add!(name2, body2).should be_true
    db.commit!(message).should be_true
    db.body(name2).should == body2
  end

  it "should enable to add and commit an yet another file" do
    sleep 2
    message = "コミット"
    name3 = "サンプル/初夢"
    body3 = "# タイトル\n\n* 富士\n* 鷹\n* なすび"
    db.add!(name3, body3).should be_true
    db.commit!(message).should be_true
    db.body(name3).should == body3
  end

  it "should enable to output list" do
    db.list.should == ['sample', 'サンプル', 'サンプル/初夢']
  end

  it "should enable to remove a page." do
    message = "コミット"
    db.add!('sample', "更新").should be_true
    db.commit!(message).should be_true
    db.delete('sample').should be_true
    db.commit!(message).should be_true
    db.body('sample').should == nil
  end

  it "should unable to post a blank page." do
    message = "コミット"
    db.add!('blank', "").should be_false
    db.body('blank').should == nil
  end
end
