//where th componenets will go to get rendered
//navbar
//Rent comp
//Return Comp



import React from 'react';

import Navbar from './components/Navbar'
import Rent from './components/Rent'
import Return from './components/Return'
import {RoomContextProvider} from './context/RoomContext'


function App() {
  return (
    <div className="App">
     <RoomContextProvider>
      <Navbar />
      <Rent />
      <Return />
     </RoomContextProvider>
    </div>
  );
}

export default App;
