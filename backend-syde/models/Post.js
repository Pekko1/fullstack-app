const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    createdAt: { type: Date, default: Date.now },
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post