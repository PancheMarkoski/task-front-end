import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EventsContext = createContext()

const EventsContextProvider = (props) => {

    const [events, setEvents] = useState([])


    const [AuthUser, setAuthUser] = useState(localStorage.getItem("user"))


    useEffect(() => {
        setEvents(JSON.parse(localStorage.getItem(AuthUser)))
    }, [AuthUser])

    useEffect(() => {
        localStorage.setItem(AuthUser, JSON.stringify(events))
    })

    const addEvent = (name, date, desc) => {
        setEvents(events !== null ? [...events, { id: uuidv4(), name, date, desc }] : [{ id: uuidv4(), name, date, desc }])
    }

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id))
        console.log("DELETE ITEM:", events.filter(event => event.id !== id))
    }

    const updateEvent = (id, updatedEvent) => {
        setEvents(events.map(event => event.id === id ? updatedEvent : event))
    }

    const fetchEvent = (id) => {
        return events.filter(event => event.id === id)
    }

    const fetchAuthUser = (authUser) => {
        setAuthUser(authUser)
    }

    return (
        <EventsContext.Provider value={{ events, addEvent, deleteEvent, updateEvent, fetchEvent, fetchAuthUser }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventsContextProvider;