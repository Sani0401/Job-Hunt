const express = require('express');
const app = express();
const userController = require('./controller/userController');
const adminController = require('../server/controller/adminController')
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
const cors = require("cors")
const connect = require("../server/config/connectingDB")
dotenv.config();
app.use(express.json());
app.use(cors());
 connect();
app.use("/api/user/", userController);
app.use("/api/admin/", adminController);

app.listen(PORT, () =>{
    console.log(`Listening on port, ${PORT}`);
})

