# Trahald

[![Build Status](https://travis-ci.org/3100/trahald.png?branch=master)](https://travis-ci.org/3100/trahald)

Yet another simple wiki on git.

* realtime preview in editing
* markdown
* utf-8 page title and contents (You can use 日本語, français, ...)
* bootstrap
* slideshow

You need:

* `git` or `redis`(mainly for Heroku) as backend database.
* `ruby 1.9.3` or `jruby 1.7.3`

Restrictions:

* If you use `jruby` or `windows`, `git` is not available. Run trahald with `-E` options like `rackup -E redis`.

This project does not support ruby 1.8.7.
It will no longer supported in all senses after June 2013.

[http://www.ruby-lang.org/en/news/2011/10/06/plans-for-1-8-7/](Plans for 1.8.7 - ruby-lang.org)

## Installation

This is just a library.
To use Trahald as your wiki, see [3100/a_trahald](https://github.com/3100/a_trahald).

## In development

### Preparation

```
bundle install
```

By default, Bundler installs `git` and `redis` gems. You can use `--without` option with these groups:

* git
* redis

e.g. If you do not need `redis` gem, add the option:

```
bundle install --without redis
```

### Running App

```
rackup -p $PORT
```

By default, Trahald use `git`. If you want to use `redis` alternatively, add `-E` option:

```
rackup -p $PORT -E redis
```

### Test

```
bundle exec rspec
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
