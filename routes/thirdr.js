const express= require('express');
const third=require('../models/third');
const router= express.Router();

router.get("/third/read",async(req,res)=>{
   await third.find().then((err,result)=>{
    if(err){
        return res.send(err);
    }
    return res.send(result);
   });
});

router.post("/third/insert",async(req,res)=>{
    const rollno=req.body.rollno;
    const name=req.body.name;
    const comment=req.body.comment;

    const entry2= await third.create({rollno:rollno,name:name,comment:comment});
    try {
        entry2.save();
        res.send("entry added");
    } catch (error) {
        console.log(error);
    }

});

module.exports=router;