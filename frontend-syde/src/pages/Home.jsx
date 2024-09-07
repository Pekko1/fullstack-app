import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Home(){

    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const token = localStorage.getItem("token")

                if(!token){
                    navigate("/", {state : {loginError: "Please log in to access the Home"}})
                    return
                }

                const res = await axios.get("http://localhost:3000/home",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })

                setMessage(res.data.message)
                
            } catch(err){
                console.error("Access denied", err)
                navigate("/", {state : {loginError: "Please log in to access the Home"}})
            }
        }

        fetchData()
    },[navigate])

    const handleLogout = ()=>{
        localStorage.removeItem("token")
        navigate("/")
    }

    return(

        <>
        <div className="bg-light vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="container text-center bg-white p-5 rounded shadow-sm">
                <h1 className="mb-4">Home Page</h1>
                <h2 className="mb-4">{message}</h2>
                <button 
                    className="btn btn-primary btn-lg" 
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
        </>
    )
}

export default Home