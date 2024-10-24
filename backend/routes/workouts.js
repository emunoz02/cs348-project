const express = require('express')
const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//Get single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//POST single workouts
router.post('/', (req, res) => {
    res.json({mssg: 'POST single workout'})
})

//DELETE single workouts
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE single workout'})
})

//UPDATE single workouts
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE single workout'})
})

module.exports = router