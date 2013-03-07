# -*- coding: utf-8 -*-
require 'rubygems'
require 'bundler/setup'

require_relative '../lib/trahald'

RSpec.configure do |config|
  # require shared examples
  Dir["./spec/support/**/*.rb"].sort.each {|f| require f}
end
