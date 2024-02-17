const user = require('../models/userModel')
const job = require('../models/JobsModel')
const {createHash,comparePassword} = require("../service/hashingFunctions")
const {createToken,verifyToken} = require('../service/jwtTkokens')
async function logUser(data){
    console.log("request recieved!", data);
    const userEmail = data.email;
const User = await user.findOne({email: userEmail});
console.log("This is user",User);
if( User){
 console.log("You are here");
    if( comparePassword(data.password,User.password)){
       const token = await createToken(User);
      
       return {token: token, response:1};
    }
}
return -1;
}






async function addUser(data){
    const {userName, userEmail, userPassword, userMobileNumber, userType} = data;
 
  try{
    const hash =  await createHash(userPassword);
    const newUser = await user.create({email:userEmail,name:userName,password :hash,mobileNumber: userMobileNumber,category:userType})
    return 1;
  }
  catch(error){
    console.error("Error creating user:", error);
    return -1;
  }
}


async function getData () {
  try{
    const data = await job.find();
    console.log(data);
    return data;
  }
  catch(error){
    console.error("error getting data", error)
    return -1;
  }
}


module.exports = {logUser,addUser,getData};