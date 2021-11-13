const router = require('express').Router();
const Workout = require('../models/workout');

// Get all workouts
router.get('api/workouts', (req, res) => {
    Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// Create a workout
router.post('api/workouts/', (req, res) => {
    Workout.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

// Update a workout
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate({_id: req.params.id}, {exercise: req.body}).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

// Get workouts in range
router.get('api/workouts/range', (req, res) => {
    Workout.find({}).limit(7).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;