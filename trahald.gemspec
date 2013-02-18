# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'trahald/version'

Gem::Specification.new do |gem|
  gem.name          = "trahald"
  gem.version       = Trahald::VERSION
  gem.authors       = ["3100"]
  gem.email         = ["sugar16g@gmail.com"]
  gem.description   = %q{TODO: Write a gem description}
  gem.summary       = %q{TODO: Write a gem summary}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]

  gem.add_dependency 'grit'
  gem.add_dependency 'redis'
  gem.add_dependency 'sinatra'
  gem.add_dependency 'slim'
end
