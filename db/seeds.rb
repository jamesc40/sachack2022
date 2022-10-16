# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding User Data.."
User.create(firstName: "Hyun", lastName:"Cho", email: "hcho774@gmail.com", password_digest: "WaterMelon123!", longitude: 1.234, latitude: 1.34, isSafe: true)
puts "seeding Users DONE!!!"

puts "Seeding Missing Person Data.."
MissingPersonData.create(
    name: "Joe",
    age: 28,
    gender: "male",
    eyeColor: "green",
    hairColor: "green",
    height: 6,
    weight: 145,
    ethnicity: "Asian",
    description: "Last seen wearing blue shirt. Green shoes. 
    Last known location is this.",
    image: "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
)

MissingPersonData.create(
    name: "James",
    age: 29,
    gender: "male",
    eyeColor: "brown",
    hairColor: "brown",
    height: 6,
    weight: 145,
    ethnicity: "Caucasian",
    description: "Last seen wearing blue shirt. Green shoes. 
    Last known location is this.",
    image: "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
)

MissingPersonData.create(
    name: "Eric",
    age: 29,
    gender: "male",
    eyeColor: "blue",
    hairColor: "blue",
    height: 6,
    weight: 145,
    ethnicity: "Asian",
    description: "Last seen wearing blue shirt. Green shoes. 
    Last known location is this.",
    image: "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
)

MissingPersonData.create(
    name: "Hyun",
    age: 30,
    gender: "male",
    eyeColor: "black",
    hairColor: "black",
    height: 5,
    weight: 145,
    ethnicity: "Asian",
    description: "Last seen wearing blue shirt. Green shoes. 
    Last known location is this.",
    image: "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
)

puts "seeding Missing Person DONE!!!"
