const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    name :{
        type :String,
        required:true
    },

    price :{
        type :Number,
        required:true
    },

    available :{
        type :Number,
        required:true,
    }
    ,
    rating :{
        type :Number
    }
    ,
    feedback:[
        {
            userId:{
                type :String,
                required:true
            },
            message :{
                type:String,
                required:true
            }
        }
    ]


})


const Stationary_itms  = mongoose.model("STATIONARY_ITEMS",ItemSchema);
module.exports = Stationary_itms;