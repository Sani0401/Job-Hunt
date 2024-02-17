const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secret_key = process.env.secret_key;
async function createToken(userData) {
   const Userdetails = {
    name:userData.name,
    email: userData.email, 
    type: userData.category
   }
    try {
        const token = jwt.sign(Userdetails, secret_key, { expiresIn: '1h' });
        console.log('Token created:', token);
        return token;
    } catch (error) {
        console.error('Error creating token:', error.message);
        throw error;
    }
}


async function verifyToken(token){
 const response = await jwt.verify(token, secret_key);
 console.log(response);
}

module.exports = {createToken,verifyToken}
