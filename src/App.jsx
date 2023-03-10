import React, { useEffect, useState } from "react"
import "./app.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./app.css"
import Post from "./pages/Post"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const App = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            }).then(response => {
                if(response.status === 200) return response.json()
                throw new Error("authentication has been failed")

            }).then(resObject => {
                setUser(resObject.user)
                
            }).catch(err=>{
                console.log(err)
            })
        }
        getUser()
    }, [])

    console.log(user)

    return (
    <BrowserRouter>
        <>
            <Navbar user={user}/>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Navigate to="/login" /> } />
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login /> } />
                <Route path="/post/:id" element={user ? <Post/> : <Navigate to="/login"/> } />
            </Routes>
        </>
    </BrowserRouter>
    )
}

export default App