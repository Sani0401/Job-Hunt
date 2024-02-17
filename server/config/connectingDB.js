const mongoose = require("mongoose");

const dbPassword = process.env.DB_PASSWORD; // Assuming you have an environment variable named DB_PASSWORD

async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://sanipatel0401:Sanipatel0401@cluster0.awzdb25.mongodb.net/JobBoard`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connect;
