

const User            = require("../Schema/account_schema")
const Stationary_itms = require('../Schema/stationary_items_schema');
const userOrders      = require('../Schema/userOreder_schema')


exports.SaveUser = async (req,res)=>{
   const {name,email,phone} = req.body
    if(!name || !email || !phone)
    {
        return res.status(404).json({message : "please enter the valid data "})
    }
   
    const data = new User({name,email,phone});
    const resp = await data.save();
    if(resp)
    {
        res.json({message : "this is admin user profile creator"})
    }
    else
    {
        res.json({message : "this is admin user profile creator unable to create"})
    }

}


exports.ItemAdd = async(req,res)=>{
    const {name,price,available} = req.body
    if(!name || !price || !available)
    {
        return res.status(404).json({message : "please enter the valid data "})
    }
    const rating  = 0;
    const data = new Stationary_itms({name,price,available,rating});
    const resp = await data.save();
    if(resp)
    {
        res.json({message : "Item saved "})
    }
    else
    {
        res.json({message : "Server Error please try again letter"})
    }
}

exports.changeAvailability = async(req,res)=>{
    const {num}=req.body;
    const id=req.params.id
    console.log(id);
    const item = await Stationary_itms.updateOne({id : id },{$set:{available:num}})
    if(item)
    {
        res.status(200).json({message :"value updated successfully"});
    }
    else
    {
        res.status(401).json({message :"value cant be updated "});
    }

}

exports.orderStatusChange = async(req,res)=>{
    const id = req.params.id;
    //const id = req.body
   console.log(id);
  
    const ordestc = await userOrders.updateOne({_id:id},{$set:{orderStatus:"preapered"}});
  
    if(ordestc)
    {
        res.status(200).json({mess:"order status changed to on the way"});
    }
    else
    {
       res.status(401).json({message :"value cant be updated "});
    }
}
