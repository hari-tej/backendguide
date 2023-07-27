const mongoose= require('mongoose');

const fourthSchema= mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },





},{timestamps:true});

const Fourth=mongoose.model('Fourth',fourthSchema);
module.exports=Fourth;