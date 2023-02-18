import React from 'react'
import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"

const Login = () => {

    //Google
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    //Github
    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self")
    }

    //Facebook
    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self")
    }

    return (<>
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="logo" className="icon" />Google
                    </div>
                    <div className="loginButton facebook" >
                        <img src={Facebook} alt="logo" className="icon" onClick={facebook}/>Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="logo" className="icon" />Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"></div>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button type="submit" className="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Login