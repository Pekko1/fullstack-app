const mongoose = require("mongoose")

const AccountSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Account = mongoose.model("account", AccountSchema)

module.exports = Account