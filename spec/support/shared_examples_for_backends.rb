# -*- coding: utf-8 -*-

shared_examples 'backend db' do
  it "should contains no data at first" do
    db.list.should == []
  end

  it "should enable to add and commit some files." do
    name1 = "sample"
    body1 = "# title\n\n* hoge\n* huga\n* 123"
    name2 = "サンプル"
    body2 = "# タイトル\n\n* いち\n* に\n* さん"
    name3 = "サンプル/初夢"
    body3 = "# タイトル\n\n* 富士\n* 鷹\n* なすび"
    db.add!(name1, body1)
    db.add!(name2, body2)
    db.add!(name3, body3)
    message = "コミット"

    db.commit!(message).should be_true
    db.body(name1).should == body1
    db.body(name2).should == body2
    db.body(name3).should == body3
  end

  it "should enable to output list" do
    db.list.should == ['sample', 'サンプル', 'サンプル/初夢']
  end
end
