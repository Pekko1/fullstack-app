import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const errorMessage = location.state?.loginError || "";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all the fields");
            return;
        }

        setError("");

        try {
            const res = await axios.post(`${API_URL}/auth/login`, {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);
            navigate("/home");
        } catch (err) {
            let errorMessage = "Login failed, please try again";

            if (err.response && err.response.data && err.response.data.error) {
                errorMessage = err.response.data.error;
            }
            console.error("Login failed", err);
            setError(errorMessage);
        }
    };

    return (
        <div className="bg-white p-3 test">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {(error || errorMessage) && (
                    <p className="text-danger">{error || errorMessage}</p>
                )}

                <button
                    type="submit"
                    className="btn btn-success w-100 rounded-0"
                    aria-label="Login"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
