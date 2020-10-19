import React, { useContext } from 'react'
import RoomContext from '../context/RoomContext'


    export default function ReturnRoom() {

        const { rooms, setRooms } = useContext(RoomContext);

        

        const returnRoom = (e) => {


                let alreadyRented = prompt("If you want to check out please enter your name:")



                let updatedRooms = rooms.map(floor => {
                    return floor.map(room => {
                        if ( alreadyRented === room.renter || room.renter != null) {
                            room.renter = null

                        } 

                        return rooms


                    })
                })

                setRooms(updatedRooms)
                //console.log(updatedRooms)



            }
    
             

            

        return (
            <div>
              <button 
                onClick = {returnRoom}>Click To Check OUT</button>
            </div>
 )}
    

    
    