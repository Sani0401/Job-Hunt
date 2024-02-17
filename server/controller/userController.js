const express = require("express");
const { logUser, addUser,getData } = require("../service/userService");
const router = express.Router();

router.post("/login", async (req, res) => {
  const data = req.body;

  try {
    const user = await logUser(data);
    console.log("This is the response: ",user.response);
    if (user.response === 1) {
      return res.status(200).json({ message: "User logged In", token : user.token });
    } else {
      return res.status(401).json({ message: "Check Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/signup", async(req, res) => {
  const data = req.body;

  try {
    const response = await addUser(data);
    console.log(response);
    if (response === 1) {
      return res.status(200).json({ message: "User Created Sucessfully!" });
    }
    if (response === -1) {
      return res.status(409).json({ message: "Email used" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});





router.get("/getData",async  (req,res) =>{


 try{
  const data = await getData();
  if( data == -1){
    return res.status(500).json({message:"error getting data"});
  }
  return  res.status(200).json({message:"error getting data", data: data}); 
 }
 catch(error){
  return res.status(500).json({message:"error getting data"});
 }

})



module.exports = router;
