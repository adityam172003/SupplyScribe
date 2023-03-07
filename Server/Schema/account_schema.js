const mongoose = require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    rollNo:{

        type:Number,
        required:true
    },
    year:
    {
        type :String,
        required:true
    }

})

const User=mongoose.model('STUDENT',userSchema);
module.exports=User;