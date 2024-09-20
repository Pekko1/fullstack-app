import Signup from "../components/Signup";
import Login from "../components/Login";
import { useState } from "react";
import { Helmet } from "react-helmet";

function InitialPage() {
    const [click, setClick] = useState(true);

    const changeForm = () => {
        setClick(!click);
    };

    const handleSignupSuccess = () => {
        alert("Account created!");
        setClick(true);
    };

    return (
        <>
            <Helmet>
                <title>Welcome to My App</title>
                <meta
                    name="description"
                    content="Login or Signup to access My App"
                />
                <meta name="keywords" content="signup, login, app" />
                <meta property="og:title" content="Welcome to My App" />
                <meta
                    property="og:description"
                    content="Create an account or login to explore My App."
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

            <div className="bg-secondary vh-100 special">
                <div className="d-flex flex-column justify-content-center align-items-center container box">
                    <h1 className="pt-1">WELCOME</h1>

                    {click ? (
                        <Login />
                    ) : (
                        <Signup
                            onSignupSuccess={handleSignupSuccess}
                            test="ciao"
                        />
                    )}

                    {click ? (
                        <>
                            <span className="mt-3">New here?</span>
                            <button
                                onClick={changeForm}
                                className="text-center mt-3 btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                            >
                                Create a new Account
                            </button>
                        </>
                    ) : (
                        <>
                            <span className="mt-3">
                                Already have an Account?
                            </span>
                            <button
                                onClick={changeForm}
                                className="text-center mt-3 btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default InitialPage;
