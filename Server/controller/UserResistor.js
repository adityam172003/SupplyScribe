

const User =require('../Schema/account_schema');

exports.userResister= async (req,res) =>{

    const {name,phone,email,rollNo,year} = req.body;
    console.log(req.body);

    if(!name||!phone||!email||!rollNo||!year)
    {
       return res.json({message:"enter the data first "}).status(401);
    }

    const obj = User.find({email,rollNo})
    if(obj)
    {
       return res.json({message:"alreaddy resgistrerd"});

    }

    const newUser = new User({name,email,phone ,rollNo,year});

    if(newUser.save())
    {
        res.json({message:"user rigistered successfully"}).status(200);
    }
    else
    {
        res.json({message:"internal server error"}).status(500);
    }
}