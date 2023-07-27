const mongoose= require('mongoose');

const secondSchema= mongoose.Schema({
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

const Second=mongoose.model('Second',secondSchema);
module.exports=Second;