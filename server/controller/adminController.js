const express = require( "express");
const router = express.Router();
const Admin = require("../models/adminModel")
const {createToken, verifyToken, } = require("../service/jwtTkokens")
const addJob = require('../service/adminServices')
router.post("/login",async (req, res) =>{
 
   try{
      console.log("request Recived");
    const {email, password} = req.body;
    const admin = await Admin.findOne({email: email});
   
    if( admin && admin.password == password){
    const adminData = {
      email: email, password:password,
      type:"Admin"
    }
const token = await createToken(adminData);
res.status(200).json({message:"Admin Logged in", token : token})
    }
   }
   catch(error){
console.error("Error logging in: ", error);
return res.status(500).send("Internal Server Error");
   }
})



router.post("/addJob", async (req,res) =>{
   const data = req.body;
  try{
   const response = await addJob(data);

   console.log(response);
   if( response == -1){
      return res.status(500).json({message:"Error Adding Data"});
   }
   return res.status(200).json({message:"Data Added!"})
  }

  catch(error){
   console.error(error);
   return res.status(500).json({message:"Error Adding Data"});
  }
})

module.exports = router;