const express= require('express');
const fourth=require('../models/fourth');
const router= express.Router();

router.get("/fourth/read",async(req,res)=>{
   await fourth.find().then((err,result)=>{
    if(err){
        return res.send(err);
    }
    return res.send(result);
   });
});

router.post("/fourth/insert",async(req,res)=>{
    const rollno=req.body.rollno;
    const name=req.body.name;
    const comment=req.body.comment;

    const entry3=await fourth.create({rollno:rollno,name:name,comment:comment});
    try {
        entry3.save();
        res.send("entry added");
    } catch (error) {
        console.log(error);
    }

});

module.exports=router;