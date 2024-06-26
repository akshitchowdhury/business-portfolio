import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import XIcon from '@mui/icons-material/X';
import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Button } from "@material-tailwind/react";
const Home = () => {
  return (
    <>
      <div
        className="home relative h-auto md:h-screen inset-0 object-cover w-full
       filter-none transition ease-in-out duration-300  hover:blur-none "
      >
        <div className="flex flex-col p-10">
          <div
            className="text-white md:absolute md:blur-md 
      transition ease-in-out duration-300 
      absolute inset-y-48 hover:blur-none md:inset-36 text-3xl 
      md:text-7xl  font-semibold justify-center -my-4"
          >
            Pratikshit Chowdhury
          </div>
          <div
            className="titleText text-white text-xl
            absolute inset-y-56
      md:absolute md:inset-60 "
          >
            I'm your go to Web Developer...
          </div>
          <div
            className=" text-white text-xl
            absolute inset-y-80
      md:absolute md:inset-x-96 md:inset-y-96 md:my-20 md:mx-3.5"
          >
            So get in touch with me if you want to ramp up your services
          
            <hr className="text-white w-full bg-white my-2"/>

            <p className="text-sm md:text-xl  "> Follow me on: 
              <span className="md:mx-36 my-6  md:-my-6  flex  flex-row">
             <a href="https://twitter.com/akshitchow" target= "blank"> 
            <XIcon className="mx-4 hover:text-sky-800 transition ease-in-out
            duration 300"/></a>
            <a href="https://www.instagram.com/" target= "blank"><Instagram className="mx-4 hover:text-pink-500 transition ease-in-out
            duration 300"/></a>
            <a href="www.linkedin.com/in/pratikshit-chowdhury-8a3411162" target= "blank"><LinkedIn className="mx-4
             hover:text-blue-600 transition ease-in-out
            duration 300"/></a>
            <a href="https://github.com/akshitchowdhury" target= "blank"><GitHub className="mx-4
             hover:text-slate-700 transition ease-in-out
            duration 300"/></a>
            
            
            
            
            </span> </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-96  p-10 ">
        
               <Link to="/services"> 
              <button className="py-3 px-3 text-lg md:text-xl text-white
                 bg-opacity-10 ring-2 ring-white rounded-sm
                  transition duration-300 ease-in-out hover:bg-amber-400 hover:shadow-md 
                  hover:ring-0 hover:border-amber-400  hover:text-lg ">
                  Explore more
                </button>  
                </Link> 

              
              <Link to="/contact">
                 <button className="py-3 px-3 text-lg md:text-xl text-white bg-opacity-15 ring-2 ring-amber-300
                 rounded-sm transition duration-300 ease-in-out hover:bg-white hover:shadow-md hover:border-none
                  hover:ring-0 hover:text-xl hover:text-black">
                  Contact Me
                </button>
                
               </Link>
            </div>
      </div>
    </>
  );
};

export default Home;
