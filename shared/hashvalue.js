const bcrypt=require("bcrypt")


async function hashvalue(password){

    const hash= await bcrypt.hash(password,12)

}
async function comparevalue(passord,exsistingPassword){
    const compare=await bcrypt.compare(passord,exsistingPassword)
    return compare
}


module.exports={
    hashvalue,comparevalue
}