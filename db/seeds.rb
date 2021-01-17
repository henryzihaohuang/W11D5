# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create!(username: "Whoopty", password: "abc123")

u2 = User.create!(
  username: 'guest1',
  password: 'password1'
)

u3 = User.create!(
  username: 'josh',
  password: 'password2'
)

u4 = User.create!(
    username: "Playboy", 
    password: "vamps123"
)

u5 = User.create!(
  username: 'Borat',
  password: 'password1235'
)

u6 = User.create!(
  username: 'guesswho',
  password: 'bluesclue'
)
u7 = User.create!(
    username: "Mike", 
    password: "abc123"
)

u8 = User.create!(
  username: 'guest',
  password: 'password9000'
)

u9 = User.create!(
  username: 'username',
  password: 'password10'
)

u10 = User.create!(
  username: 'Harden',
  password: 'bkallday'
)


b1 = Bench.create!(
  description: 'Cali Bench',
  lat: 37.767209, 
  lng: -122.435801
)
b2 = Bench.create!(
  description: 'Cali Bench2',
  lat: 37.1234, 
  lng: -122.4568
)
b3 = Bench.create!(
  description: 'Cali Bench3',
  lat: 37.23542, 
  lng: -122.12344
)