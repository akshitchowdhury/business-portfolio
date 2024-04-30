import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home relative h-screen inset-0 object-cover w-full
       filter-none transition ease-in-out duration-300  hover:blur-none ">
      
      <div className="flex flex-col">
      <div className="text-white absolute blur-md 
      transition ease-in-out duration-300  hover:blur-none inset-48 text-7xl 
      font-semibold justify-center">
        Pratikshit Chowdhury
      </div>
      <div className="titleText text-white text-2xl
      absolute inset-72">
        
      I'm your go to Web Developer...
      </div>
      </div>
      </div>
      
    </>
  );
};

export default Home;
