const router = require('express').Router();

router.use('/workout',require('./workoutRoutes.js'))




module.exports = router;