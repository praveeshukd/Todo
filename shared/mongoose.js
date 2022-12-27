const mongoose=require("mongoose")


mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).then((result)=>{
    console.log("mongoose connected")
})
