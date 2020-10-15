import React, { useContext } from 'react'
import RoomContext from '../context/RoomContext'


    export default function ReturnRoom() {

        const { rooms, setRooms } = useContext(RoomContext);

        
        let renterName;

        

        const returnRoom = (e) => {

            if (prompt("Do you want to check out? Y/N") === "Y"){

                 renterName = prompt("Enter your name:")
            }
    
             if(renterName === rooms.renter){
                localStorage.rooms.renter = null
                } 

            }

        return (
            <div>
              <button 
                onClick = {returnRoom}>Click To Check OUT</button>
            </div>
 )}
    

    
    