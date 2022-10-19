import React, { useState, Fragment } from 'react';
import './App.css';
// import mySound from './assets/blender2.mp3';
import Home from './Components/Home';
import Messages from "./Components/Messages.jsx";


import {Route, Routes} from 'react-router-dom';
import Roommates from './Components/Roommates';
import Apartment from './Components/Apartment';
import Profile from './Components/Profile';

function App() {

//   let [totalSupply, setTotalSupply] = useState('4998');
//   let [blending, setBlending] = useState(false);
//   const blend = new Audio(mySound);


//   const mintSimulation = () =>{
//     if(totalSupply < 5000){
//       totalSupply++;
//       setTotalSupply(totalSupply);

//       blend.play();   
//       setBlending(true)

//       setTimeout(() => {
//         setBlending(false);
//       }, 5000);
//     }
//   };

//   return (
//     <div className="App">
//       <div className='main-app'>
//         {/* @if totalSupply hits 5k / maxSupply is true, switch to 'sold out'  */}
//         {(totalSupply < 5000) ? <h1 className='sale_status for_sale'>For Sale</h1> : <h1 className='sale_status sold_out'>Sold Out</h1>}

//         <div className={blending ? 'juice_mixer blending' : 'juice_mixer'}>
//           <div className='blender'></div>
//         </div>

//         <h1 className='total_supply'>{totalSupply}/5000</h1>

//         <button onClick={() => mintSimulation()} className='mint_btn'/>
//       </div>
//     </div>
//   );


  return(
    <Fragment>
          <Home/>
            <Routes>
              <Route path='/roommates' element={<Roommates/>} />
              <Route path='/apartment' element={<Apartment/> } />
              <Route path='/chat/messages' element={<Messages/>} />
              {/* <Route path='/profile' element={<Profile/>} /> */}

            </Routes>
    </Fragment>

  )
  
}

export default App;
