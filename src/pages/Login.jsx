import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Login({ afterLogin }) {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    // GET AUTH INFO
    let auth = JSON.parse(localStorage.getItem("auth"))

    const handleLogin = (e) => {
        e.preventDefault()

        if (auth === null) {
            alert("User is not exists")
        }
        //CHECK IF USER PASS IS CORRECT
        const same = auth.filter(d => d.username === Username);
        if (same.length !== 0) {
            if (same[0].password) {
                setUsername('');
                setPassword('');
                afterLogin(Username)
            } else {
                alert("Wrong password")
            }
        } else {
            alert(`${Username} user not exists!`)
        }
    }

    return (
        <div className="login">
            <span className="registerTitle">Log In</span>
            <form className="registerForm" onSubmit={(e) => handleLogin(e)}>
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your Username..." value={Username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." value={Password} onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" type='submit'>Log In</button>
            </form>
            <Link to="register">
                <button className="registerLoginButton">Register</button>
            </Link>
        </div>
    )
}
