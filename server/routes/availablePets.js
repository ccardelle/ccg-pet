const express = require('express')
const Pets = require('../models/Pets.js')

const router = express.Router()

// Route to get all countries
router.get('/', (req, res, next) => {
  Pets.find()
    .then(pets => {
      res.json(pets)
    })
    .catch(err => next(err))
})

// Route to add a country
// router.post('/', (req, res, next) => {
//   let { name, capitals, area, description } = req.body
//   Country.create({ name, capitals, area, description })
//     .then(country => {
//       res.json({
//         success: true,
//         country,
//       })
//     })
//     .catch(err => next(err))
// })

module.exports = router
