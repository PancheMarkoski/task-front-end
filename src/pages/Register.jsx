import React, { useState, } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Register({ afterLogin }) {

    let navigate = useNavigate();

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Username, setUsername] = useState("")

    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")

    // Validate
    const [ErrorEmail, setErrorEmail] = useState("")
    const [ErrorUsername, setErrorUsername] = useState("")

    const validate = () => {

        let ErrorEmail = ""
        let ErrorUsername = ""

        if (!Email.includes("@")) {
            ErrorEmail = "Invalid Email"
        }

        if (!Username) {
            ErrorUsername = "Name cannot be blank"
        }

        if (ErrorUsername || ErrorEmail) {
            setErrorEmail(ErrorEmail)
            setErrorUsername(ErrorUsername)
            return false
        }

        setErrorEmail("")
        setErrorUsername("")
        return true;
    }

    let auth = JSON.parse(localStorage.getItem("auth"))

    const handleRegister = (e) => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            if (auth === null) {
                auth = []
            }

            const sameUser = auth.filter(d => d.username === Username)

            // CHECK IF USERNAME ALREADY EXIST
            if (sameUser.length === 0) {
                auth = [...auth, { "username": Username, "password": Password, "Email": Email, "firstName": FirstName, "LastName": LastName, "Phone": Phone }]
                localStorage.setItem("auth", JSON.stringify(auth))
                setFirstName("")
                setLastName("")
                setUsername("")
                setEmail("")
                setPhone("")
                setPassword("")
                afterLogin(Username)
                navigate("/", { replace: true })
            } else {
                alert(`${Username} exist!`)
            }
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={(e) => handleRegister(e)}>
                <label>First Name</label>
                <input
                    className="registerInput"
                    type="text" placeholder="Enter your First Name..."
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <label>Last Name</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your Last Name..."
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <p style={{ color: "red", fontWeight: "bold" }}>{ErrorUsername}</p>
                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <p style={{ color: "red", fontWeight: "bold" }}>{ErrorEmail}</p>
                <label>Phone</label>
                <input
                    className="registerInput"
                    type="number"
                    placeholder="Enter your Phone..."
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="registerButton">Register</button>
            </form>
            <Link to="/">
                <button className="registerLoginButton" type='submit'>Login</button>
            </Link>
        </div>
    )
}
