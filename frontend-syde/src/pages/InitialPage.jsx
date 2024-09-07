import Signup from "../components/Signup"
import Login from "../components/Login"
import { useState } from "react";


function InitialPage() {

    const [click , setClick] = useState(true)

    const changeForm = ()=>{
        setClick(!click)
    }

    const handleSignupSuccess = ()=> {
        setClick(true)
    }

    return (
        <div className="bg-secondary vh-100 special" >

            <div className="d-flex flex-column justify-content-center align-items-center container box">
                <h1 className="pt-1">WELCOME</h1>

                {click? 
                <Login /> :
                <Signup 
                    onSignupSuccess = {handleSignupSuccess}
                    test="ciao"/>}

                {click? 
                <>
                    <span className="mt-3">New here?</span>
                    <button onClick={changeForm}
                    className="text-center mt-3 btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Create a new Account
                    </button>
                </>:

                <>
                    <span className="mt-3">Already have an Account?</span>
                    <button onClick={changeForm}
                    className="text-center mt-3 btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </button>
                </>
                }

            </div>

        </div>
    );
}

export default InitialPage;




{/* <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" aria-label="Login">
    Login
</button> */}