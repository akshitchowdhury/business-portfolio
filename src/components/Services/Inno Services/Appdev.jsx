import React from "react";
import app from "../../../assets/AppDev.jpg";
import app2 from "../../../assets/app2.jpg";
import "./Appdev.css";

export default function AppDev() {
  return (
    <div className="flex flex-col  items-center pt-10 pb-20 bg-black shadow-sm">
      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">
              Cross Platform App development
            </div>
            <div className="mt-2 text-sm md:text-base text-white">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-white">
              <p>
                At my freelancing venture, I specialize in delivering top-tier
                services by leveraging cutting-edge industrial techniques. I
                focus on crafting user-centric cross-platform mobile
                applications that seamlessly scale and elevate businesses. With
                a keen eye on quality and innovation, I ensure that each project
                stands out in both style and substance, empowering clients to
                thrive in today's dynamic market.
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
