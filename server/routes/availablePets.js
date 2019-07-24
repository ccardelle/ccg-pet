const express = require('express')
const Pets = require('../models/Pets.js')

const router = express.Router()

// Route to get all pets
router.get('/', (req, res, next) => {
  Pets.find()
    .then(pets => {
      res.json(pets)
    })
    .catch(err => next(err))
})

module.exports = router
