
const jwt=require("jsonwebtoken")

const User =require('../Schema/account_schema');




exports.userResister= async (req,res) =>{

    const {name,phone,email,rollNo,year,password} = req.body;
    console.log(req.body);

    if(!name||!phone||!email||!rollNo||!year||!password)
    {
       return res.json({message:"enter the data first "}).status(401);
    }
    console.log('=====================')
    const obj = await User.findOne({email,rollNo});
 
    if(obj)
    {
       return res.json({message:"already resgistrerd"});

    }

    const newUser =  await new User({name,email,phone ,rollNo,year,password});
    const registered = await newUser.save()
    if(registered)
    {
        res.json({message:"user rigistered successfully"}).status(200);
    }
    else
    {
        res.json({message:"internal server error"}).status(500);
    }


}

exports.userLogin = async (req,res) =>{

    const {email,rollNo,password} = req.body;

    console.log(req.body);

    if(!rollNo||!email||!password)
    {
        return res.json({message:"enter the data first "}).status(401);
    }
    const us = await User.find({email,password,rollNo})
    if(us)
    {

    
    const isMatch=await bcrypt.compare(password,us.password)
    const token=await us.generateAuthToken() 

   // console token during login 
     console.log("1 ] console token during login")
     console.log(token)

    res.cookie("jwtoken",token,{
      
        expires:new Date(Date.now()+25892000000),
        httpOnly:true
    }); 
     
      
    (isMatch)? res.status(200).send({
   
              message:"login success" 
    }):res.send({message:"unable to login"})

    
    }else{
    res.status(404).json({error:"user not found please register first"})
 
    }
    return  res.json({message:"internal server error"}).status(500);
}


// authentication 

