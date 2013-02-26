# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'trahald/version'

Gem::Specification.new do |gem|
  gem.name          = "trahald"
  gem.version       = Trahald::VERSION
  gem.authors       = ["3100"]
  gem.email         = ["sugar16g@gmail.com"]
  gem.description   = %q{a simple wiki}
  gem.summary       = %q{a simple wiki}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]

  gem.add_dependency('grit', '~> 2.5.0')
  gem.add_dependency('sass', '~>3.2.6')
  gem.add_dependency('sinatra', '~>1.3.5')
  gem.add_dependency('slim', '~>1.3.6')
end
