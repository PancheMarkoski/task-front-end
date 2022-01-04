import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { EventsContext } from "../context/EventsContext"


export default function Modal({ open, onClose, eventId }) {

    const { deleteEvent } = useContext(EventsContext)

    // DELETE EVENT
    const handleDeleteEvent = (eventId) => {
        deleteEvent(eventId)
        onClose()
    }

    if (!open) return null;

    return ReactDOM.createPortal(
        <div className='modal'>
            <div className='modal-content'>
                <h2 className='modal-heading'>
                    {localStorage.getItem("user")} do you want to delete this event?
                </h2>
                <div className='modal-btn'>
                    <button onClick={() => handleDeleteEvent(eventId)}>Yes</button>
                    <button onClick={() => onClose()}>Cancel</button>
                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}
