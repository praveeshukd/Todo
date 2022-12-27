const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
require("dotenv").config()
// console.log(process.env)
require("./shared/mongoose")
const indeRouter=require("./router/index")
app.use("",indeRouter)
app.get("/user/:id",(req,res)=>{
    res.send(req.params.id)
})
app.get("/mobile",(req,res)=>{
    console.log(req.query)
    res.send(req.params.id)
    console.log(req.params.id)

})
app.listen(3000,()=>{
    console.log("port working 3000")
})