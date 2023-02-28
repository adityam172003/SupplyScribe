

const User = require("../Schema/account_schema")
exports.SaveUser = async (req,res)=>{
   const {name,email,phone} = req.body
    
   
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