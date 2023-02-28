const express= require("express")

const userRouter= express();

const {
    feedback,
    userOrder
} = require('../controller/userController')

userRouter.patch('/feedback:id',feedback);
userRouter.post('/order',userOrder);

module.exports = userRouter