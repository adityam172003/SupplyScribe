const express= require("express")

const adminRouter= express();

const {
    SaveUser,
    ItemAdd,
    changeAvailability,
    orderStatusChange,
    getUser,
    allOrders
} = require("../controller/adminController")








adminRouter.post("/Saveuser",SaveUser );


adminRouter.post('/itemsadd',ItemAdd)  ;



adminRouter.patch('/availableset:id',changeAvailability);



adminRouter.patch('/orderstatus/:id',orderStatusChange);



adminRouter.get('/getuser',getUser);



adminRouter.get('/allorders',allOrders);





module.exports =adminRouter


