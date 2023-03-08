

const Stationary_itms = require('../Schema/stationary_items_schema')
const userOrders      = require('../Schema/userOreder_schema')




exports.feedback      = async(req,res)=>{
    const id=req.params.id

    const {user_id ,message} = req.body;

    if(!user_id || !message)
    {
      return  res.status(401).json({message:"please enter valid data "})
    }

    

    const feed = await Stationary_itms.updateOne({id:id},{ $push:{feedback:{userId  : user_id, message}}});
    if(feed)
    {
        res.status(200).json({message:"feeddback added successsfully"});
    }
    else
    {
        res.status(401).json({message:"unable to add feedback"});
    }
}

exports.userOrder = async (req,res)=>{
    // const {user_id,orders,orderStatus}=req.body;
   const {user_id ,data1} = req.body;
   const {price ,orderStatus,total_items,data} =data1
   console.log(req.body);
   

    //validate user id first 

    const ordr = await userOrders({user_id,price,orderStatus,total_items,data});
    const resp = ordr.save();
    if(resp)
    {
        res.status(200).json({message:"order placed successfully"});
    }
    else
    {
        res.status(401).json({message:"unable to place order"});
    }
}


exports.userCart = async (req,res)=>{
    const id = req.params.id ;
    console.log("usercart : ",id);
    const obj = await userOrders.find({user_id: id });
    console.log(obj);
    res.send(obj);
}