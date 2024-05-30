
import React from "react";
import propic from "../../assets/profile.jpg";
import { BackgroundBeams } from "../ui/background-beams";

const About = () => {
  return (
    <>
      <div className="about bg-zinc-950   md:h-screen  md:p-20" style={{ 
      height: "auto" }}>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          
          <div className="flex flex-col mx-4 md:mx-28 p-11 gap-11">
            <h2 className="text-4xl md:text-4xl font-bold mt-4  text-white">
              Welcome to my Page!
            </h2>
            <p className="text-sm md:text-lg text-white mt-2 max-w-3xl md:max-w-2xl"
            >
              I'm a self-taught web developer with seasoned experience in
              working with freelancing clients, helping them establish and
              enhance their online presence. My journey has equipped me with a
              comprehensive understanding of both client-side and server-side
              development. With expertise in crafting user-friendly interfaces
              and robust backend systems, I specialize in building dynamic and
              efficient web applications tailored to meet diverse business
              needs.
            </p>
          </div>

          <div className="w-auto md:w-72 my-10 md:my-0 h-auto md:h-full 
           rounded-md overflow-hidden mb-4">

            <img
              src={propic} // Replace with your image path
              alt="Profile"
              className="object-cover w-56 h-56 
              grayscale
              hover:scale-150  transition-transform 
              hover:grayscale-0 ease-in-out
               duration-500
              md:w-full md:h-full"
            />
          </div>
        </div>
      </div>
      <BackgroundBeams/>
    </>
  );
};

export default About;
