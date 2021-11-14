const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Exercise name required"
        },
        type: {
            type: String,
            trim: true,
            required: 'Exercise type required'
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
            required: "Exercise duration required"
        },
        distance: {
            type: Number
        }
    }]
});
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
