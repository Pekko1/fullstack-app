const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB_URL;

async function connectDB() {
    try {
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("connection error", err);
    }
}

connectDB();

const db = mongoose.connection;

module.exports = db;
