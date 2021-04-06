const router = require('express').Router()

router.get('/stats/:id', (req, res) => {
  Workout.findByID(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

module.exports = router 