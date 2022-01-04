import React, { useState, useContext } from 'react'
import { EventsContext } from "../context/EventsContext"
import { useNavigate } from 'react-router-dom'

export default function AddEvent() {

    const { addEvent } = useContext(EventsContext)
    let navigate = useNavigate()

    const [NewEvent, setNewEvent] = useState({
        name: "", date: "", desc: ""
    })

    const onInputChange = (e) => {
        setNewEvent({ ...NewEvent, [e.target.name]: e.target.value })
    }

    const { name, date, desc } = NewEvent;

    // ADD NEW EVENT
    const handleSubmit = (e) => {
        e.preventDefault();
        addEvent(name, date, desc)
        navigate("/", { replace: true })
    }

    return (
        <div className="addEvent">
            <span className="addEvent-registerTitle">Add Event</span>
            <form className="addEvent-registerForm" onSubmit={(e) => handleSubmit(e)}>
                <label>Event Name</label>
                <input
                    className="addEvent-registerInput"
                    type="text"
                    placeholder="Enter your Event Name..."
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required
                />
                <label>Event Date</label>
                <input
                    className="addEvent-registerInput"
                    type="date"
                    placeholder="Enter your Event Date..."
                    name="date"
                    value={date}
                    onChange={(e) => onInputChange(e)}
                    required
                />
                <label>Event Descrtiption</label>
                <textarea
                    className="addEvent-registerInput"
                    type="text"
                    placeholder="Enter your Event Descrtiption..."
                    name="desc"
                    value={desc}
                    onChange={(e) => onInputChange(e)}
                    required
                >
                </textarea>
                <button className="addEvent-registerButton" type='submit'>Add Event</button>
            </form>
        </div>
    )
}
