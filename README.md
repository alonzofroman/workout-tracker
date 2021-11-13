# workout-tracker

## Author
Alonzo Roman

## Table of Contents
* [Summary](#Summary)
* [Code](#Code-Snippet)
* [Technologies](#Technologies)
* [Contact](#Contact-Links)

## Summary
The purpose of this project is to create an application that can take workout or exercise information and track it by utilizing a MongoDB database. Users can create a new workout, complete and submit them, and update them using the features availabel on the webpage. Users can track workout names, types, sets, reps and duration using the features available.

## Code Snippet
In order to acquire a sum of exercise duration to use in the total section of the page, I had to use aggregation, which allows a developer to group multiple values together. This was used in my api route to request workout data from the database.

```Javascript
router.get('/workouts', async (req, res) => {
    try {
        const workoutData = await db.Workout.aggregate([{
            $addFields: {totalDuration:{$sum: "$exercises.duration"}}
        }]);
        res.status(200).json(workoutData);
        console.log(workoutData);
    } catch (err) {
        res.status(500).json(err)
    }
});
```


## Technologies

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)



## Contact Links

- [Github](https://github.com/alonzofroman)
- [LinkedIn](https://www.linkedin.com/in/alonzo-roman/")

## Resources/Acknowledgements 

- [W3Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [MongoDB](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/)