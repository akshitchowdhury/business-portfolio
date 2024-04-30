// import React from "react";
// import propic from "../../assets/profile.jpg";

// const About = () => {
//   return (
//     <>
//       <div className="about bg-zinc-950 max-h-screen h-auto sm:h-auto md:h-screen p-10 md:p-20"  style={{border: "2pt solid red"}}>
//         <div className="flex flex-col md:flex-row items-center justify-center mt-10">
//           <div className="w-auto md:w-52 h-auto md:h-52 rounded-full overflow-hidden border-4 border-gray-800 mb-4">
//             <img
//               src={propic} // Replace with your image path
//               alt="Profile"
//               className="object-cover w-32 h-32 md:w-full md:h-full"
//             />
//           </div>
//           <div className="flex flex-col mx-4 md:mx-28 p-11 gap-11" >
//             <h2 className="text-4xl md:text-4xl font-bold mt-4  text-white">
//               Welcome to my Lair
//             </h2>

//             {/* style={{border: "2pt solid red"}} */}
            
//             <p className="text-sm md:text-lg text-white mt-2 max-w-3xl 
//              md:max-w-2xl h-auto"
//              style={{border: "2pt solid red"}}>
//               I'm a self-taught web developer with seasoned experience in
//               working with freelancing clients, helping them establish and
//               enhance their online presence. My journey has equipped me with a
//               comprehensive understanding of both client-side and server-side
//               development. With expertise in crafting user-friendly interfaces
//               and robust backend systems, I specialize in building dynamic and
//               efficient web applications tailored to meet diverse business
//               needs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;


import React from "react";
import propic from "../../assets/profile.jpg";

const About = () => {
  return (
    <>
      <div className="about bg-zinc-950   md:h-screen  md:p-20" style={{ 
      height: "auto" }}>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <div className="w-auto md:w-52
          my-10 md:my-0 h-auto md:h-52 rounded-full overflow-hidden border-4 border-gray-800 mb-4">
            <img
              src={propic} // Replace with your image path
              alt="Profile"
              className="object-cover w-32 h-32 md:w-full md:h-full"
            />
          </div>
          <div className="flex flex-col mx-4 md:mx-28 p-11 gap-11">
            <h2 className="text-4xl md:text-4xl font-bold mt-4  text-white">
              Welcome to my Lair
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
        </div>
      </div>
    </>
  );
};

export default About;
