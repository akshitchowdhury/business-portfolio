import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="home relative h-screen inset-0 object-cover w-full
       filter-none transition ease-in-out duration-300  hover:blur-none "
      >
        <div className="flex flex-col p-10">
          <div
            className="text-white md:absolute md:blur-md 
      transition ease-in-out duration-300 
      absolute inset-y-48 hover:blur-none md:inset-36 text-3xl 
      md:text-7xl  font-semibold justify-center "
          >
            Pratikshit Chowdhury
          </div>
          <div
            className="titleText text-white text-2xl
            absolute inset-y-56
      md:absolute md:inset-60 "
          >
            I'm your go to Web Developer...
          </div>
          <div
            className="titleText text-white text-2xl
            absolute inset-y-56
      md:absolute md:inset-60 "
          >
            So get in touch with me if you want to ramp up your services
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
