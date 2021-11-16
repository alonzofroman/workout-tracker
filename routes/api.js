const router = require('express').Router();
const db = require('../models');

// Get all workouts
router.get('/workouts', async (req, res) => {
    try {
        const workoutData = await db.Workout.aggregate([{
            $addFields: {totalDuration:{$sum: "$exercises.duration"}}
        }]);
        res.json(workoutData);
        // console.log(workoutData);
    } catch (err) {
        res.json(err)
    }
}
)

// Create a new workout
router.post('/workouts', (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body).then(workoutData => {
        res.json(workoutData);
        console.log(workoutData);
    }).catch(err => {
        res.json(err);
    })
});


// Update an existing workout
router.put('/workouts/:id', (req, res) => {
    // Update by id, push exercises to not overwrite previous data
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new:true, runValidators:true}).then((workoutData) => {
        res.json(workoutData);
    }).catch(err => {
        res.json(err);
    })
});

// Get workouts in range of the last 7 days, sorted by ID
router.get('/workouts/range', (req, res) => {
    db.Workout.aggregate([{$addFields: {totalDuration: {$sum: "$exercises.duration"}}}]).sort({_id: -1}).limit(7).then(workoutData => {
        res.json(workoutData);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;