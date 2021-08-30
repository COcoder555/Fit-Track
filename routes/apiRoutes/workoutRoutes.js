const router = require('express').Router();
const workout = require('../../models/Workout');


router.get('/',async (req,res)=>{
    try{    
    const allWorkouts = await Workout.find().sort({$natural:-1}).limit(1);
    
    res.status(200).json(allWorkouts)
    }catch(err){
        res.status(500).json(err);
    }
    

});


router.put('/',async (req,res)=>{
    try{
    const allWorkouts = await Workout.update({
    
    });
    res.status(200).json(allWorkouts)
}catch(err){
    console.log(err)
    res.status(500).json(err);
}

});

router.post('/',async (req,res)=>{
    try{

    const allWorkouts = await Workout.create( req.body    
    );
    res.status(200).json(allWorkouts)
    }catch(err){
        res.status(500).json(err)
    }
})



router.get('/',async (req,res)=>{
    const allWorkouts = await Workout.find({
    
    });
    res.status(200).json(allWorkouts)
    

});








module.exports = router;