require './lib/trahald'
set :git, :redis
run Trahald::App
