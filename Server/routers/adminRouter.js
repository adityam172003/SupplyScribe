const express= require("express")

const adminRouter= express();

const {
    SaveUser,
    ItemAdd,
    changeAvailability,
    orderStatusChange
} = require("../controller/adminController")

adminRouter.post("/Saveuser",SaveUser );
adminRouter.post('/itemsadd',ItemAdd)  ;
adminRouter.patch('/availableset:id',changeAvailability);
adminRouter.patch('/orderstatus:id',orderStatusChange);


module.exports =adminRouter