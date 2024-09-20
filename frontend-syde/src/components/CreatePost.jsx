import axios from "axios";
import { useState } from "react";

function CreatePost(prop) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            setError("Please fill in all the fields");
            return;
        }

        setError("");

        try {
            const token = localStorage.getItem("token");
            await axios.post(
                `${API_URL}/posts`,
                { title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setTitle("");
            setContent("");
            alert("Post created successfully");
            prop.onPostCreated();
        } catch (err) {
            console.error(err);
            setError("Error creating the post. Please try again.");
        }
    };

    return (
        <div className="container mt-5 p-4 bg-light rounded shadow-sm">
            <h2 className="text-center mb-4">Create Post</h2>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter post title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="form-control"
                        placeholder="Enter post content"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                {error && <p className="text-danger text-center">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">
                    Create Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
