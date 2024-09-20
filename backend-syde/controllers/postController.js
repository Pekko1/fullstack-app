const Post = require("../models/Post");

const createPost = async (req, res) => {
    const { title, content } = req.body;
    const author = req.user.id;

    try {
        const post = new Post({ title, content, author });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error to create the post" });
    }
};

const getPost = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("author", "name")
            .sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failer to fetch posts" });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params
    const userId = req.user.id

    try {
        const post = await Post.findById(id)

        if (!post) {
            return res.status(401).json({ error: "Post not found" })
        }

        if (post.author.toString() !== userId) {
            return res.status(403).json({ error: "Unauthorized to delete this post" })
        }

        await Post.findByIdAndDelete(id)
        res.status(200).json({ message: "Post deleted successfully" })

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Error deleting the post" })
    }
}

module.exports = { createPost, getPost, deletePost };
