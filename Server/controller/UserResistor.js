

const User =require('../Schema/account_schema');

exports.userResister= async (req,res) =>{

    const {name,phone,email,rollNo,year,password} = req.body;
    console.log(req.body);

    if(!name||!phone||!email||!rollNo||!year||!password)
    {
       return res.json({message:"enter the data first "}).status(401);
    }

    const obj = await User.find({email,rollNo})
    if(obj)
    {
       return res.json({message:"alreaddy resgistrerd"});

    }

    const newUser =  await new User({name,email,phone ,rollNo,year,password});

    if(newUser.save())
    {
        res.json({message:"user rigistered successfully"}).status(200);
    }
    else
    {
        res.json({message:"internal server error"}).status(500);
    }
}

exports.userLogin = async (res,res) =>{

    const {email,rollNo,password} = req.body;

    console.log(req.body);

    if(!rollNo||!email||!password)
    {
        return res.json({message:"enter the data first "}).status(401);
    }

    const obj = await User.find({email,rollNo});
    if(obj)
    {
        if(obj.password != password)
        {
           return res.json({err:'Incorrect password'}).status(404);
        }

        return res.json({message:"user login successfully"}).status(200);
    }

    return  res.json({message:"internal server error"}).status(500);
}
