import React, {createContext, useState, useEffect} from 'react';
const RoomContext = createContext()

export default RoomContext



function hotelRooms(floor, room) {  //define props

    //const [floor, room] = props
    let emptyArr = [];

    
    const deposit = 45,
            floorCost = 50,
            roomCost = 10;
    
        for (let i = 0; i < floor; i++) {
            emptyArr.push([])
        
    
            for (let j = 0; j < room; j++) {
    
                    emptyArr[i].push({
    
                        room: `${i+1}${j<9 ? '0' : ""}${j+1}`,
                        renter: null,
                        price: ( (i + 1) * floorCost ) + ( roomCost * j ) + deposit
    
    
                    })
            }
    
        }
    //console.log(emptyArr)
        return emptyArr




    }
    
    
        hotelRooms(4,4)

    export function RoomContextProvider(props){

    const [rooms, setRooms] = useState(() => {

        let storedData = localStorage.getItem('rooms')
        
        if (storedData !== null) {
        
        return (JSON.parse(storedData));
        
        } else return hotelRooms(4,4)  //**********************RETURN SOMETHING OTHER THAN NULL */
        
        })
        
        const [dispAvail, setDisplayAvail] = useState(true)
        
        const [displayUnAvail, setDisplayUnAvail] = useState(true)
        
        
        useEffect(() => {
        
        localStorage.setItem('rooms', JSON.stringify(rooms))
        
        }, [rooms])
        
        
        return (
        
        <RoomContext.Provider value={{rooms, setRooms, dispAvail, setDisplayAvail, displayUnAvail, setDisplayUnAvail}}>
        
        {props.children}
        
        </RoomContext.Provider>
        
        )

    }


        
        
