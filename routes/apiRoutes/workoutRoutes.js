const router = require('express').Router();
const Workout = require('../../models/Workout');


router.get('/', async (req, res) => {
    try {
        const allWorkouts = await Workout.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }])

        res.status(200).json(allWorkouts)
    } catch (err) {
        res.status(500).json(err);
    }


});


router.put('/:id', async (req, res) => {
    try {
        const updateWorkout = await Workout.update({ where: { _id: req.params.id } }, {
            $push: {
                exercises: req.body
            }
        });
        res.status(200).json(updateWorkout)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }

});

router.post('/', async (req, res) => {
    try {

        const newWorkout = await Workout.create(req.body
        );
        res.status(200).json(newWorkout)
    } catch (err) {
        res.status(500).json(err)
    }
})



router.get('/range', async (req, res) => {
    try {
        const allWorkouts = await Workout.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }]).sort({
            _id: -1
        }).limit(7)

        res.status(200).json(allWorkouts)
    } catch (err) {
        res.status(500).json(err);
    }
});








module.exports = router;