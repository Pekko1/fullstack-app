const express = require("express");
const { createPost, getPost, deletePost } = require("../controllers/postController");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticateToken, createPost);
router.get("/", authenticateToken, getPost)
router.delete("/:id", authenticateToken, deletePost)

module.exports = router;
