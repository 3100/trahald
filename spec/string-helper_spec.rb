# -*- coding: utf-8 -*-

describe "Trahald::StringHelper" do
  it "should enable convert file path from ascll-8bit to utf8" do
    file_path = "\"JRuby\\345\\257\\276\\345\\277\\234\\343\\201\\270\\343\\201\\256\\351\\201\\223.md\""
    file_path.force_encoding "ASCII-8BIT"
    converted = Trahald::StringHelper.convertFilePath(file_path)
    converted.should == "JRuby対応への道.md"
  end
end



