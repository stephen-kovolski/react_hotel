import React, { useContext } from 'react'
import RoomContext from '../context/RoomContext'




    export default function Rent() {

        const { rooms, setRooms} = useContext(RoomContext);

        let flattenArr = rooms.flat()

        let available = flattenArr.filter(hotel => hotel.renter === null)//*******************************

            const rentClick = (e) => {

            if (prompt("Would you like a room? Y/N") === "Y"){

                let notRentedYet = true;


                let updatedRooms = rooms.map(floor => {
                    return floor.map(room => {
                            if (room.renter !== null || notRentedYet === false) {

                                    return room
                            } else {
                                    notRentedYet = false
                                let renterName = prompt("Enter your name:")
                                    return {...room, renter: renterName}
                            }

                    })
                })

                console.log(updatedRooms)

                


                





            }

        }

    
                            return (
                                <div>
                                  <button 
                                    onClick = {rentClick}>Click To Check In</button>
                                </div>
                     )} 

                    

