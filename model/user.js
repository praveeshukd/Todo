const mongoose=require("mongoose")
const schema=mongoose.Schema({
    username:String,
    password:String,
    Phonenumber:Number,
    gender:String

})
module.exports=mongoose.model("user",schema)