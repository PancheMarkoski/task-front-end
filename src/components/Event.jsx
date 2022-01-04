import React from 'react'
import { Link } from 'react-router-dom'
// REACT ICONS
import { GoDiffRemoved } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';



export default function Event({ event, isModalOpen }) {

    return (
        <tbody className='event'>
            <tr className='event-row'>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.desc}</td>
                <td><Link to={`/editevent/${event.id}`}><button><FiEdit /></button></Link></td>
                <td><button onClick={(e) => isModalOpen(true, event.id)}><GoDiffRemoved /></button></td>
            </tr>
        </tbody>
    )
}
