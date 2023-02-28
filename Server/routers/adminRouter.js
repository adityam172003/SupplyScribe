const express= require("express")

const adminRouter= express();

const {
    SaveUser
} = require("../controller/adminController")

adminRouter.post("/Saveuser",SaveUser );


module.exports =adminRouter