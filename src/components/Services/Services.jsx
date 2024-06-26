import React, { useState, useEffect } from "react";

import { BackgroundBeams } from "../ui/background-beams";
import c1 from "../../assets/node2.png";
import c2 from "../../assets/react.png";
import c3 from "../../assets/express.png";
import c4 from "../../assets/mongo.png";
import c5 from "../../assets/js.jpg";
import c6 from "../../assets/tailwind.png";
import c7 from "../../assets/mern3.jpg";
import c8 from "../../assets/reactNative.png";
import c9 from "../../assets/next.webp";

import "./Services.css";
import { Carousel } from "flowbite-react";
import ImageCardContainer from "./Carousel/ImageCardContainer";

const Services = () => { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(true);

  const images = [c1, c2, c3];


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMoving) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isMoving]);

  return (
    <>
    
      <div className="Services  grayscale">
        <div
          className="text-white md:absolute  
      transition ease-in-out duration-300 
      absolute inset-y-48  md:inset-36 text-3xl 
      md:text-7xl  font-semibold justify-center -my-4
      
      "
        >
          <p className=" rounded-sm h-28 p-4">
            Elevate Your Online Presence:
            <br></br>
            <hr className="bg-white w-full my-2"></hr>
            <h1 className="text-lg md:text-3xl text-sky-200 mx-4 my-4">
              {" "}
              Tailored Solutions for Your Digital Success
            </h1>
          </p>
        </div>
      </div>

      <div
        className="BgDiv relative flex flex-col 
          bg-black
          items-center self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
        style={{ marginTop: "0.2px", height: "auto" }}
      >
      <BackgroundBeams/>
        <p className="text-sm md:text-lg -my-4 text-white justify-center">
          Let me help you skyrocket your business with the cutting edge tech
          stack used at the industry
        </p>

        <div
          className="relative -mt-4 text-3xl 
            
            font-extrabold max-md:mr-2.5 max-md:max-w-full"
          style={{ marginTop: "5%" }}
        >
          <div className="carosuelBox object-cover w-full h- h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel className="carosuel w-full h-full">
              <img
                src={c1}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c2}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c3}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c4}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c5}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c6}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c7}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c8}
                alt="..."
                className="object-contain w-full h-full"
              />
              <img
                src={c9}
                alt="..."
                className="object-contain w-full h-full"
              />
            </Carousel>
          </div>

          <p className="text-sm md:text-lg font-normal my-10 text-white justify-center">
            Take a look at the Specialsed sevices I'd be glad to help you with
          </p>
          <ImageCardContainer />
        </div>
        
      </div>
      
    </>
  );
};

export default Services;
