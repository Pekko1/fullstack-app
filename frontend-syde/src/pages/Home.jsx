import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { Helmet } from "react-helmet";

function Home() {
    const [message, setMessage] = useState("");
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/", {
                        state: {
                            loginError: "Please log in to access the Home",
                        },
                    });
                    return;
                }

                const res = await axios.get(`${API_URL}/home`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setMessage(res.data.message);

                const postsRes = await axios.get(`${API_URL}/posts`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPosts(postsRes.data);
            } catch (err) {
                console.error("Access denied", err);
                navigate("/", {
                    state: { loginError: "Please log in to access the Home" },
                });
            }
        };

        fetchData();
    }, [navigate, API_URL]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const refreshPosts = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(`${API_URL}/posts`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPosts(res.data);
        } catch (err) {
            console.error("Failed to fetch posts", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${API_URL}/posts/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPosts(posts.filter((post) => post._id !== id));
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.error || "An error occurred");
        }
    };

    return (
        <>
            <Helmet>
                <title>Home Page - My App</title>
                <meta
                    name="description"
                    content="Welcome to your Home page. View, create, and manage your posts."
                />
                <meta name="keywords" content="home, posts, create, manage" />
                <meta property="og:title" content="Home Page - My App" />
                <meta
                    property="og:description"
                    content="Manage your posts, create new ones."
                />
                <meta name="author" content="Pekko-GB" />
                <meta
                    property="og:image"
                    content="../assets/images/earth-americas-solid.svg"
                />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="../assets/images/earth-americas-solid.svg"
                />
            </Helmet>
            <div className="bg-secondary d-flex flex-column justify-content-center align-items-center">
                <div className="container text-center bg-white p-5 rounded shadow-sm">
                    <h1 className="mb-4">Home Page</h1>
                    <h2 className="mb-4">{message}</h2>

                    <CreatePost onPostCreated={refreshPosts} />

                    <Post posts={posts} handleDelete={handleDelete} />

                    <button
                        className="btn btn-secondary btn-lg mt-4"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
