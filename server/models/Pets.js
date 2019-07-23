const mongoose = require('mongoose')

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: [String],
    default: [],
  },
  breed: {
    type: String,
  },
  imgUrl: {
    type: String,
    default: 'https://s3.us-east-2.amazonaws.com/ccgpets/ccg-dog-img.png',
  },
  gender: {
    type: String,
  },
})

const Pets = mongoose.model('Pets', petsSchema)

module.exports = Pets
