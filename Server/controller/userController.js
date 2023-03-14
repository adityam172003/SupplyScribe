

const Stationary_itms = require('../Schema/stationary_items_schema')
const userOrders      = require('../Schema/userOreder_schema')
const User            = require('../Schema/account_schema')



exports.feedback      = async(req,res)=>{
    const id=req.params.id
    const user_id = req.rootuser.id;

    const user =  await User.findOne({_id:user_id});
    if(!user)
    {
       return res.status(401).json({message:"please login first"})
    }


    const {message} = req.body;

    if( !message)
    {
      return  res.status(400).json({message:"please enter valid data "})
    }

   
    

    const feed = await Stationary_itms.updateOne({id:id},{ $push:{feedback:{userId  : user_id, message}}});
    if(feed)
    {
        res.status(200).json({message:"feeddback added successsfully"});
    }
    else
    {
        res.status(500).json({message:"unable to add feedback"});
    }
}

exports.userOrder = async (req,res)=>{
  
    const user_id=req.rootuser._id;
    console.log(req.rootuserId)
    // user validation 
    const user = await User.findOne({_id:user_id});
   
    if(!user)
    {
       return res.status(401).json({message:"please login first"})
    }
    

   const {price ,orderStatus,total_items,data} =req.body
   //console.log(req.body);
   

    
    

    const ordr = await userOrders({user_id,price,orderStatus,total_items,data});

    const resp = ordr.save();

    if(resp)
    {
        res.status(200).json({message:"order placed successfully"});
    }
    else
    {
        res.status(500).json({message:"unable to place order"});
    }

}


exports.userCart = async (req,res)=>{

    const user_id = req.rootuser._id;
    const user = await User.findOne({_id:user_id});
    if(!user)
    {
       return res.status(401).json({message:"please login first"})
    }
    

    // console.log("usercart : ",id);
    const obj = await userOrders.find({user_id: user_id });
    // console.log(obj);
    res.send(obj).status(200);
}

exports.userProfileUpdate = async (req,res)=>{
  const  user_id = req.rootuser.id;
    
        User.findByIdAndUpdate({_id:user_id},req.body)
        .then((user)=>{
            res.status(200).json({message:"user info updated successfully"});
        })
        .catch(err =>{
            res.status(500).json({message:"internal server error"})
        })
    
    
   


}