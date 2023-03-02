const express= require("express")

const userRouter= express();

const {
    feedback,
    userOrder,
    userCart
} = require('../controller/userController')

userRouter.patch('/feedback:id',feedback);
userRouter.post('/order',userOrder);
userRouter.get('/cart/:id',userCart)
module.exports = userRouter