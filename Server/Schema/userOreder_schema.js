const mongoose =require('mongoose');


const usrorder = new mongoose.Schema({
    rollNo :{
        type :Number,
        required:true,
    },
    

    price:{
            type :Number,
            required:true
        },
        
            orderStatus:{
            type:String,
            required:true
        }
        ,
    total_items:{
        type : Number,
        required:true
      },
       
     data:[

            {   
                menu:{
                    type:Object,
                   
                    required:true,
                },
                qty:{
                    type :Number,
                    required :true
                }
            }
        ]

    
   

})

const userOrders = mongoose.model("Orders ",usrorder);

module.exports=userOrders