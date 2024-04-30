import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
// import { Bounce } from "react-swift-reveal";
// import MapLeaflet from './MapLeaflet/MapLeaflet';
import InquiryAndMapComponent from './InquiryForm/InquiryForm';


const Conatct = () => {
  return (
    <div className='bg-black h-auto '>
    
    <h1 
            className="text-white md:absolute  
      transition ease-in-out duration-300 
      absolute inset-y-10 inset-x-12    md:inset-10 text-3xl 
      md:text-7xl  font-semibold  -my-4 ">
      Contact Now!
    </h1>
    
    <br />  
    <br />  
    <br />  
    <InquiryAndMapComponent/>
    <br />  
    </div>
  )
}

export default Conatct