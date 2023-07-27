const mongoose= require('mongoose');

const thirdSchema= mongoose.Schema({
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

const Third=mongoose.model('Third',thirdSchema);
module.exports=Third;