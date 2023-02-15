import React from "react";
import "./app.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./app.css"
import Post from "./pages/Post";

const App = () => {
    return (<>
        <Navbar />
        <Post />
        <h1>GOOGLE AUTHENTICATION</h1>
    </>)
}

export default App