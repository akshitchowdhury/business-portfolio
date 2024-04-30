import React from "react";
import app from '../../../assets/digitalMarkt.webp';
import app2 from '../../../assets/digitalMarkt2.webp';
import './DigitalMarket.css';

export default function DigitalMarket() {
  return (
    <div className="flex flex-col items-center pt-10 pb-20 bg-white shadow-sm">
      <div className="BgDiv relative flex flex-col items-center self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={app}
          className="AppBg object-cover absolute inset-0 size-full"
        />
        <div className="relative -mt-4 text-3xl font-extrabold max-md:mr-2.5 max-md:max-w-full">
          Make your Digital presence matter
        </div>
        <div className="relative text-sm mt-2 text-neutral-600 max-w-[90vw] max-md:text-base">
          We are a full service technology and digital solutions company with over 20 years of experience in industry.
        </div>
        <div className="relative justify-center mt-4 space-x-2">
          <button className="px-4 py-1.5 text-xs text-white bg-zinc-900 rounded-sm">Start a project together</button>
          <button className="px-2 py-1.5 text-xs bg-white border border-zinc-900 rounded-sm">Read More</button>
        </div>
      </div>

      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">Technology</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>At Innomatrics Technologies, we redefine digital marketing with a blend of strategy, creativity, and innovation. Our seasoned experts harness the power of data-driven insights and cutting-edge tools to craft bespoke marketing campaigns that resonate with your audience. From social media management to search engine optimization, we tailor each strategy to amplify your brand's online presence and drive measurable results. With a focus on ROI and continuous optimization, we ensure that your digital marketing efforts deliver tangible growth and engagement. Partner with Innomatrics Technologies to unlock the full potential of your online presence and stay ahead in the ever-evolving digital landscape.</p>
            </div>
          </div>
          <div className="flex w-full md:w-[56%]">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{borderRadius: '5%', boxShadow: 'gray 3px 10px 10px'}}
              alt="App Development"
            />
          </div>
        </div>
      </div>
      
      {/* Add other sections similarly */}
    </div>
  );
}
