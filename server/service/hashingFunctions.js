const bcrypt = require("bcrypt");

async function createHash(password){
   
    try{
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    catch(error){
        console.error("error hashing password: ", error);
        return error
    }
}

async function comparePassword(password, hashedPassword) {
try{
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}
catch(error){
console.error("error logging in: ", error);
return -1;
}
}

module.exports = {createHash,comparePassword};