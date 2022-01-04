import React, { useContext, useEffect, useState } from 'react'
import { EventsContext } from '../context/EventsContext'
//COMPONENTS
import Event from "../components/Event"
import Modal from "../components/Modal"

export default function EventsList() {

    const { events, fetchAuthUser } = useContext(EventsContext)


    // FETCH LOG IN USER INFO USED FOR UPDATE EVENTS STATE
    useEffect(() => {
        fetchAuthUser(localStorage.getItem('user'))
    }, [])


    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [eventId, setEventId] = useState("")


    // DELETE MODAL POP UP
    const isModalOpen = (isOpen, eventId) => {
        setModalIsOpen(isOpen)
        setEventId(eventId)
    }

    return (
        <>
            <h1 className='eventTable-heading'>Events</h1>
            <table className="eventTable">
                <thead className="eventsTable-thead">
                    <tr>
                        <th colSpan="1">
                            Event Name
                        </th>
                        <th colSpan="1">
                            Event Date
                        </th>
                        <th colSpan="1">
                            Event Description
                        </th>
                        <th colSpan="1">
                            Edit Event
                        </th>
                        <th colSpan="1">
                            Delete Event
                        </th>
                    </tr>
                </thead>
                {(!events || events.length === 0) ?
                    (<tbody>
                        <tr className='event-row'>
                            <td colSpan="5" style={{ textAlign: "center", color: "green" }}>
                                Please add new event
                            </td>
                        </tr>
                    </tbody>) :
                    events.map(event => <Event event={event} key={event.id} isModalOpen={isModalOpen} />)}

            </table>
            <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} eventId={eventId} />
        </>
    )
}

