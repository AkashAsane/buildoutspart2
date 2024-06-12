import React, { useState,useRef } from 'react';
import './App.css';
import Modalform from './Modal';

function App() {
  const[openModal,setOpenModal]=useState(false);
  return (
    <div className="App">
        <h1>User Details Modal</h1>
        <button className='openbtn' onClick={()=>{setOpenModal(true)}}>Open Form</button>
        {openModal &&<Modalform setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default App;
