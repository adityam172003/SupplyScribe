
const {
    User
} = require('../Schema/account_schema');


const dotenv=require("dotenv");
dotenv.config();



const jwt=require('jsonwebtoken');







const Authentication= async (req,res,next)=>{
try{
    const token=req.cookies.jwtoken ;
   
    
    console.log("this is token ",token)
    const verifyToken = jwt.verify(token,process.env.JWT_PASS) ;
    console.log("verified token ",verifyToken)
    const rootuser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
    if(!rootuser){
        throw new Error("user not found")

    }
    req.token=token;
    req.rootuser=rootuser;

    req.rootuserId=rootuser._id;

    next();
     
}catch(err){
    console.log("in the backend catch")
    res.status(401).send('Unauthorized : Not Token provided')

    console.log(err);

}


}



module.exports= Authentication;