import React from "react";
import "./app.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./app.css"
import Post from "./pages/Post";
import Login from "./pages/Login";

const App = () => {
    return (<>
        <Navbar />
        <Login />
        <h1>GOOGLE AUTHENTICATION</h1>
    </>)
}

export default App