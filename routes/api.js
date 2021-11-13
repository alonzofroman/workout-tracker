const router = require('express').Router();
const Workout = require('../models/workout');

router.get('api/workouts', (req, res) => {
    Workout.find({}).sort({date:-1}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post('api/workouts/', (req, res) => {
    Workout.create(body).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;