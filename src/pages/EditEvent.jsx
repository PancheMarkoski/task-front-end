import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { EventsContext } from "../context/EventsContext"
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


export default function EditEvent() {

    // GET ID FROM URL
    const params = useParams();

    const { fetchEvent, updateEvent } = useContext(EventsContext)

    let navigate = useNavigate()

    const [ResEventName, setResEventName] = useState("")
    const [ResEventDate, setResEventDate] = useState("")
    const [ResEventDesc, setResEventDesc] = useState("")

    // FETCH EVENT WITH ID FOR EDIT
    useEffect(() => {
        const res = fetchEvent(params.id)
        setResEventName(res[0].name)
        setResEventDate(res[0].date)
        setResEventDesc(res[0].desc)
    }, [fetchEvent, params.id])

    const updatedEvent = { id: uuidv4(), name: ResEventName, date: ResEventDate, desc: ResEventDesc }

    // EDIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEvent(params.id, updatedEvent)
        navigate("/", { replace: true })
    }

    return (
        <div className="editEvent">
            <span className="editEvent-registerTitle">Edit Event</span>
            <form className="editEvent-registerForm" onSubmit={(e) => handleSubmit(e)} >
                <label>Event Name</label>
                <input
                    className="editEvent-registerInput"
                    type="text"
                    placeholder='Enter your Event Name...'
                    value={ResEventName}
                    onChange={(e) => setResEventName(e.target.value)}
                    required
                />
                <label>Event Date</label>
                <input
                    className="editEvent-registerInput"
                    type="date"
                    placeholder="Enter your Event Date..."
                    value={ResEventDate}
                    onChange={(e) => setResEventDate(e.target.value)}
                    required
                />
                <label>Event Descrtiption</label>
                <textarea
                    className="editEvent-registerInput"
                    type="text"
                    placeholder="Enter your Event Descrtiption..."
                    value={ResEventDesc}
                    onChange={(e) => setResEventDesc(e.target.value)}
                    required
                >
                </textarea>
                <button className="editEvent-registerButton" type='submit'>Edit Event</button>
            </form>
        </div >
    )
}
