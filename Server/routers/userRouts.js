const express= require("express")

const Authentication = require('../middlewares/UserMiddleware')


const userRouter= express();
const {
    userResister,
    userLogin,
    userLogout
} = require('../controller/UserResistor');



const {
    feedback,
    userOrder,
    userCart,
    userProfileUpdate
} = require('../controller/userController')






userRouter.patch('/feedback:id',Authentication,feedback);


userRouter.post('/order',Authentication,userOrder);


userRouter.get('/cart',Authentication,userCart)


userRouter.post('/register',userResister);


userRouter.post('/login',userLogin);


userRouter.put('/updateprofile',Authentication,userProfileUpdate)


userRouter.get('/logout',Authentication,userLogout);




module.exports = userRouter