import React from "react";
import app from "../../../assets/webDesign.jpg";
import app2 from "../../../assets/webDesign2.jpg";
import "./WebDesign.css";

export default function WebDesign() {
  return (
    <div className="flex flex-col  items-center pt-10 pb-20 bg-black shadow-sm">
      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">
              Website Design
            </div>
            <div className="mt-2 text-sm md:text-base text-white">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-white">
              <p>
                At my freelance web design studio, I excel in providing
                high-quality services utilizing the latest industry techniques.
                Specializing in crafting visually stunning and user-friendly
                websites, I employ cutting-edge design methodologies to create
                captivating online experiences. With a keen focus on
                user-centric design and seamless functionality across platforms,
                I ensure that each website is not only aesthetically pleasing
                but also effectively promotes my clients' businesses. Trust me
                to elevate your online presence with bespoke web solutions that
                leave a lasting impression.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-[56%]">
            <img
              loading="lazy"
              src={app}
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
