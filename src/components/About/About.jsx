import React from "react";
import propic from "../../assets/profile.jpg";
const About = () => {
  return (
    <>
      <div className="about  bg-zinc-950" style={{ height: "100vh" }}>
        <div className="flex flex-row items-center justify-center mt-10">
          <div className="flex flex-col mx-28">
            <h2 className="text-6xl font-bold mt-4 text-white">
              Welcome to my Lair
            </h2>
            <br/>
            <br/>
            <br/>
            <p className="text-lg text-white mt-2 max-w-lg ">
              I'm a self-taught web developer with seasoned experience in
              working with freelancing clients, helping them establish and
              enhance their online presence. My journey has equipped me with a
              comprehensive understanding of both client-side and server-side
              development. With expertise in crafting user-friendly interfaces
              and robust backend systems, I specialize in building dynamic and
              efficient web applications tailored to meet diverse business needs
            </p>
          </div>
          <div className="w-52 h-52 rounded-full  overflow-hidden border-4 border-gray-800">
            <img
              src={propic} // Replace with your image path
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
