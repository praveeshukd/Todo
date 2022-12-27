const user=require("../model/user")
const { use } = require("../router")
const hashvalue=require("../shared/hashvalue").hashvalue
const compareValue=require("../shared/hashvalue").comparevalue
const jwt=require("jsonwebtoken")

const tokens=require("../shared/jwtTokens").tk

    async function sign(req,res){
        let {username,password}=req.body
        const token=await tokens(username)
        user.updateOne({name:"praveesh"},{$})
    
        console.log(token)
        if(username==""){
            res.send("user not found")
        }
        password= await hashvalue(password)
        user.create({
            username,password
        }).then((result)=>{
            res.send(result)
        }).catch((err)=>{
            res.send(err)
        })
    
    
} 


    async function login(req,res){
        let {username,password,jwts}=req.body
      
        let exsisitingUser=await user.find({username:req.body.username})
        if(await exsisitingUser==""){
            console.log(exsisitingUser)
            res.send("user ot found")
        }
        else{
            const checkuser=await compareValue(req.body.username,exsisitingUser.username)
            console.log(await checkuser)
            if(await !checkuser){
                
                res.send("password is invalid")
            }
            else{
                const token=await tokens(exsisitingUser.username)
                if(token){
                    res.cookies("jwt",token)
                    return
                }
           

                res.send(token)
            }
                        
        }
    
} 

// function findAV(result){
// let average=0
//     result.forEach(datas => {
//         average=datas.age+average
        
//     });
//     return average
// }




// function findAVerage(req,res){
//     user.find().select("age-_id").then((result)=>{
//       age=findAV(result)

//       let Payload={
//         average:age/result.length
//       }
//       res.send(Payload)
//     })
// }

// const newArray=user.mapReduce((value)=>value.username)
module.exports={sign,login}


