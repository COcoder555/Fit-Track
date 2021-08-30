const router = require('express').Router();

router.use('/workouts',require('./workoutRoutes.js'))




module.exports = router;