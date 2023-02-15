import React from 'react'
import Avatar from "../img/avatar.png"
import { Link } from 'react-router-dom'


const Navbar = ({ user }) => {
    return (<>
        <div className="navbar">
            <span className="logo"><Link to="/" className="link">Dev.R</Link></span>
            {user ? (
                <ul className="list">
                    <li className="listItem">
                        <img src={Avatar} alt="avatar" className="avatar" />
                    </li>
                    <li className="listItem">Roshitha</li>
                    <li className="listItem">Logout</li>
                </ul>
            ) : (
                <Link to="/login" className="link">Login</Link>
            )}

        </div>
    </>)
}

export default Navbar