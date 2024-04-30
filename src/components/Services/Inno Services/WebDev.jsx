import React from "react";
import app from "../../../assets/webDevelopment.jpg";
import app2 from "../../../assets/webDevelopment2.jpg";
import "./WebDev.css";

export default function WebDev() {
  return (
    <div className="flex flex-col  items-center pt-10 pb-20 bg-black shadow-sm">
      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">
              Website/Web App Development
            </div>
            <div className="mt-2 text-sm md:text-base text-white">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-white">
              <p>
                In my freelance web development practice, I am dedicated to
                delivering exceptional services, employing the latest techniques
                in the industry. Specializing in both web app and website
                development, I combine innovation with precision to create
                dynamic online experiences. Using cutting-edge technologies, I
                craft responsive and scalable solutions tailored to your
                specific needs. With a focus on user-centric design and seamless
                functionality, I bring your vision to life, ensuring your
                digital platform stands out in today's competitive landscape.
                Count on me to elevate your online presence and drive success
                for your business.
              </p>
            </div>
          </div>

          <div className="flex w-full md:w-[56%]">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "white 3px 2px 10px" }}
              alt="App Development"
            />
          </div>
        </div>
      </div>

      {/* Add other sections similarly */}
    </div>
  );
}
