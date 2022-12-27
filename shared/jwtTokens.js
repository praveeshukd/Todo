const jwt=require("jsonwebtoken")
const JWTURL="dkjndlkjndlkjndlk"
function tk(username){
    const token=jwt.sign({username},
        process.env.JWT_URL,
        // JWTURL,
        {expiresIn:"1d"})   
        return token
}



module.exports={tk}