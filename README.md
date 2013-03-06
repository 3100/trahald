# Trahald

[![Build Status](https://travis-ci.org/3100/trahald.png?branch=master)](https://travis-ci.org/3100/trahald)

Yet another simple wiki on git.

You need:

* git
* ruby 1.9.3 (2.0.0 does not work with this wiki by now.)
* linux or mac. (now engage in support for windows.)

This project does not support ruby 1.8.7.
It will no longer supported in all senses after June 2013.

[http://www.ruby-lang.org/en/news/2011/10/06/plans-for-1-8-7/](Plans for 1.8.7 - ruby-lang.org)

## Installation

This is just a library.
To use Trahald as your wiki, see [3100/a_trahald](https://github.com/3100/a_trahald).

## In development

### Preparation

```
bundle insatll
```

### Running App

```
rackup -p $PORT
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
