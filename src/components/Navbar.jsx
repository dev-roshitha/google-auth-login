import React from 'react'
import Avatar from "../img/avatar.png"


const Navbar = () => {
    return (<>
        <div className="navbar">
            <span className="logo">Dev.R</span>
            <ul className="list">
                <li className="listItem">
                    <img src={Avatar} alt="avatar" className="avatar" />
                </li>
                <li className="listItem">Roshitha</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    </>)
}

export default Navbar