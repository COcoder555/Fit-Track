const router = require('express').Router();






router.get('/',(req,res)=>{
    
    const newWorkout = await 
    
    res.status(200).json(newWorkout)
    }catch(err){
        res.status(500).json(err);
    }
    

});




module.exports = router;