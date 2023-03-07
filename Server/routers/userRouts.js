const express= require("express")

const userRouter= express();
const {
    userRegister
} = require('../controller/UserResistor');

const {
    feedback,
    userOrder,
    userCart
} = require('../controller/userController')

userRouter.patch('/feedback:id',feedback);
userRouter.post('/order',userOrder);
userRouter.get('/cart/:id',userCart)
userRouter.post('/register',userRegister);
module.exports = userRouter