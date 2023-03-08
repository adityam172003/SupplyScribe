const express= require("express")

const Authentication = require('../middlewares/UserMiddleware')


const userRouter= express();
const {
    userResister,
    userLogin
} = require('../controller/UserResistor');



const {
    feedback,
    userOrder,
    userCart
} = require('../controller/userController')



userRouter.patch('/feedback:id',feedback);


userRouter.post('/order',userOrder);


userRouter.get('/cart/:id',userCart)


userRouter.post('/register',userResister);


userRouter.post('/login',Authentication,userLogin);






module.exports = userRouter