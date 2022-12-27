const express=require("express")
const router=express.Router()

const userRouter=require("./user")

router.use("/www",userRouter)










module.exports=router