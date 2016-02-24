# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


(1..10).to_a.each { |i|
  Product.create!(
  name: 'Boostrap ' + i.to_s,
  description: 'A nice css/js library to speed up your front end',
  link: 'www.boostrap.com' + i.to_s,
  author_id: 1
  )
}
