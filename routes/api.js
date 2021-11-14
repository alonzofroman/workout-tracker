const router = require('express').Router();
// const Workout = require('../models/workout');
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

// Create a workout
router.post('/workouts', (req, res) => {
    console.log(req.body);
    db.Workout.create({}).then(workoutData => {
        res.json(workoutData);
        console.log(workoutData);
    }).catch(err => {
        res.json(err);
    })
});

// router.post('/workouts', async ({ body }, res)=> {
//     try {
//         const workoutData = await db.Workout.create(body);
//         console.log(workoutData);
//         res.status(200).json(workoutData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// Update a workout
router.put('/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate({_id: req.params.id}, {exercise: req.body}).then((workoutData) => {
        res.json(workoutData);
    }).catch(err => {
        res.json(err);
    })
});

// Get workouts in range of 7 days
router.get('/workouts/range', (req, res) => {
    db.Workout.aggregate([{$addFields: {totalDuration: {$sum: "$exercises.duration"}}}]).limit(7).then(workoutData => {
        res.json(workoutData);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;