const router = require('express').Router()
const { Workout } = require('../models')

// get all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err => console.log(err))
})
router.get('/workouts/range', (req, res) => {
  Workout.find().limit(7)
  .then(workouts => res.json(workouts))
  .catch(err => console.log(err))
})

// creates a workout
router.post('/workouts', (req, res) => {
  Workout.create({})
  .then((workout) => res.json(workout))
  .catch(err => console.log(err))
})

// get a workout by Id
router.get('/workout/:id', (req, res) => {
  Workout.findbyId()
  .then(workout => res.json(workout))
  .catch(err => console.log(err))
})

// update a workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercieses: req.body }})
  .then(workout => res.json(workout))
  .catch(err => console.log(err))
})

// delete a workout
router.delete('/workout/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
  .then(workout => res.json(workout))
  .catch(err => console.log(err))
})

module.exports = router