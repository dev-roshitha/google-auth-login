import React from "react"
import "./app.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./app.css"
import Post from "./pages/Post"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const App = () => {

    const user = false

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