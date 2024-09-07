const mongoose = require("mongoose")
require('dotenv').config();

const uri = process.env.DB_URL

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000
})
.then(()=>{
    console.log("connect to MongoDB")
})
.catch(err=>{
    console.error("connection error", err)
})

const db = mongoose.connection 

module.exports = db