const express =require("express")
const app = express();




const jwt=require("jsonwebtoken")

const cookieparser = require('cookie-parser')

const bcrypt=require("bcrypt")

app.use(express.json())
app.use(cookieparser());
const Port = 8080
const adminRouter = require("./routers/adminRouter");
const userRouter  = require("./routers/userRouts");
require("./DB/connetc")
app.get("/",(req,res)=>{
    res.send("from express server ")

})


app.use("/admin",adminRouter);
app.use("/user",userRouter);


app.listen( Port , ()=>{
    console.log("server is running on port number ",Port)
})

