// Seeds the database and deletes any exisitng entries

const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const mongoose = require('mongoose')
const Pets = require('../models/Pets')

require('../configs/database')

let pets = [
  {
    name: 'Alice',
    type: 'Dog',
    breed: 'Huskie',
    gender: 'Female',
  },
  {
    name: 'Bob',
    type: 'Dog',
    breed: 'German Shephard',
    gender: 'Male',
  },
  {
    name: 'John',
    type: 'Dog',
    breed: 'Saint Bernard',
    gender: 'Male',
  },
  {
    name: 'Leslie',
    type: 'Dog',
    breed: 'Poodle',
    gender: 'Female',
  },
  {
    name: 'Jen',
    type: 'Dog',
    breed: 'Corgi',
    gender: 'Female',
  },
  {
    name: 'Buster',
    type: 'Dog',
    breed: 'Golden Retriever',
    gender: 'Male',
  },
  {
    name: 'Lady',
    type: 'Dog',
    breed: 'Italian Greyhound',
    gender: 'Female',
  },
  {
    name: 'Papo',
    type: 'Dog',
    breed: 'Dalmation',
    gender: 'Male',
  },
  {
    name: 'Jack',
    type: 'Dog',
    breed: 'Jack Russell',
    gender: 'Male',
  },
  {
    name: 'Harriet',
    type: 'Dog',
    breed: 'Maltesse',
    gender: 'Female',
  },
  {
    name: 'Dingo',
    type: 'Dog',
    breed: 'Poodle',
    gender: 'Male',
  },
  {
    name: 'Scooby',
    type: 'Dog',
    breed: 'Great Dane',
    gender: 'Male',
  },
  {
    name: 'Jacob',
    type: 'Dog',
    breed: 'Huskie',
    gender: 'Male',
  },
  {
    name: 'Kiki',
    type: 'Dog',
    breed: 'Mix',
    gender: 'Female',
  },
  {
    name: 'Juanito',
    type: 'Dog',
    breed: 'Corgi',
    gender: 'Male',
  },
]

Pets.deleteMany()
  .then(() => {
    return Pets.create(pets)
  })
  .then(petsCreated => {
    console.log(`${petsCreated.length} users created with the following id:`)
    console.log(petsCreated.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
