import React from 'react'
import { Link } from "react-router-dom"

export default function TopBar({ afterLogout }) {

    return (
        <nav className="top">
            {localStorage.getItem("user") ?
                <ul className="topBarList">
                    <li className="topBarItem"><Link to="/addevent">Add New Event</Link></li>
                    <li className="topBarItem"><Link to="/">List All Events</Link></li>
                    <li className="topBarItem" onClick={() => afterLogout()}>Log out</li>
                </ul> :
                <ul className="topBarList">
                    <li className="topBarItem"><Link to="/">LogIn</Link></li>
                    <li className="topBarItem"><Link to="/register">Register</Link></li>
                </ul>
            }
        </nav>
    )
}
