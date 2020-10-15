import React, { useContext } from 'react'
import RoomContext from '../context/RoomContext'
import Rent from './Rent'
import Return from './Return'

export default function Navbar() {
    const {rooms, dispAvail, setDisplayAvail, displayUnAvail, setDisplayUnAvail} = useContext(RoomContext)

    return (
        <div>
            <h1>Welcome to the CD Hotel!</h1>
        </div>
    )
}
