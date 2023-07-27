const express= require('express');
const second=require('../models/second');
const router= express.Router();

router.get("/second/read",async(req,res)=>{
   await second.find().then((err,result)=>{
    if(err){
        return res.send(err);
    }
    return res.send(result);
   });
});

router.post("/second/insert",async(req,res)=>{
    const rollno=req.body.rollno;
    const name=req.body.name;
    const comment=req.body.comment;

    const entry1= await second.create({rollno:rollno,name:name,comment:comment});
    try {
        entry1.save();
        res.send("entry added");
    } catch (error) {
        console.log(error);
    }

});

module.exports=router;