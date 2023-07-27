const express= require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
require('dotenv').config();
const PORT= process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to the database successfully");
    app.listen(PORT,(req,res)=>{
        console.log("listening to the requests");
    });
    

}).catch((err)=>{
    console.log(err);
});

const secondrouter=require('./routes/secondr');
app.use(secondrouter);

const thirdrouter=require('./routes/thirdr');
app.use(thirdrouter);

const fourthrouter=require('./routes/fourthr');
app.use(fourthrouter);