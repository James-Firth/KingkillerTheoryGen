#!/usr/bin/ruby

names = File.open('kkc.txt').to_a.map{|l| l.chomp}
begin
  firstName = names.sample
  print "#{firstName} is really #{names.reject{|n| n == firstName}.sample}."
end while gets
