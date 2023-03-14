

const User =require('../Schema/account_schema');

const bcrypt = require('bcrypt')

const jwt      = require('jsonwebtoken')





exports.userResister= async (req,res) =>{

    const {name,phone,email,rollNo,year,password} = req.body;
    console.log(req.body);

    if(!name||!phone||!email||!rollNo||!year||!password)
    {
       return res.json({message:"enter the data first "}).status(400);
    }

    const obj = await User.findOne({email,rollNo});
            
    if(obj)
    {
      
       return res.json({message:"already resgistrerd"}).status(409); 

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
        return res.json({message:"enter the data first "}).status(400);
    }
    const us = await User.findOne({email:email})
    
    console.log(us);
    if(us)
    {

    
 
     const token= await us.generateAuthToken() 



    res.cookie("jwtoken",token,{
      
        expires:new Date(Date.now()+25892000000),
        httpOnly:true   
    }); 

    const isMatch = await bcrypt.compare(password,us.password);
     
      
    (isMatch)?res.status(200).send({
   
              message:"login success" 
    }).status(200):res.json({message:"internal server error"}).status(500);


    
    }else{
    res.status(404).json({error:"user not found please register first"})
 
    }
  
}




exports.userLogout = async (req,res)=>{
        res.cookie('jwtoken','', {maxAge: 1});
        res.json({message:"token deleted"});
}