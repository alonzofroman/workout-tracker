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
    Workout.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate({_id: req.params.id}, {exercise: req.body}).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;