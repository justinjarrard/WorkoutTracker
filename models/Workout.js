const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    }, 
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
  }]
})

module.exports = model('Workout', WorkoutSchema)