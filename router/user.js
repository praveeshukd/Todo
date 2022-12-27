const express=require("express")
const router=express.Router()

const usreRouter=require("../controller/user")

router.route("/create").post(usreRouter.login)

router.route("/creates").post(usreRouter.sign)




module.exports=router