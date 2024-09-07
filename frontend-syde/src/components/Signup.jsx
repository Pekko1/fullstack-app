import { useState } from "react";
import axios from "axios"


function Signup(prop) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [isPassword2Empty, setIsPassword2Empty] = useState(false);
    
    const handleSubmit = async (e)=>{
        e.preventDefault()

        setIsNameEmpty(!name);
        setIsEmailEmpty(!email);
        setIsPasswordEmpty(!password);
        setIsPassword2Empty(!password2);

        if(!name || !email || !password || !password2){
            setError("All fields are required")
            return
        }

        if(password !== password2){
            setError("Password do not match")
            return
        }
        
        setError("")
        
        try{
            await axios.post("http://localhost:3000/auth/register", {name, email, password})
            // console.log("Registration successful", res.data)
            prop.onSignupSuccess()
        }catch(err) {
            console.error("Registration failed",err)
            setError("Registration failed. Please try again.")
        }
    }

    return (
            <div className="p-3 test">
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className={`form-control rounded-0 ${isNameEmpty? "redBorder" : "" }`}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className={`form-control rounded-0 ${isEmailEmpty? "redBorder" : "" }`}
                            onChange={(e)=>setEmail(e.target.value)}
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
                            name="password"
                            className={`form-control rounded-0 ${isPasswordEmpty? "redBorder" : "" }`}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password2">
                            <strong>Reapeat Password</strong>
                        </label>
                        <input 
                            type="password"
                            id="password2"
                            placeholder="Reapeat Password"
                            autoComplete="off"
                            name="password"
                            className={`form-control rounded-0 ${isPassword2Empty? "redBorder" : "" }`}
                            onChange={(e)=>setPassword2(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-success w-100 rounded-0" aria-label="Register">
                        Register
                    </button>
                </form>
                    
            </div>
    );
}

export default Signup;
