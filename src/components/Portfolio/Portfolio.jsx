import React from "react";

import i1 from "../../assets/portfolio/bint1.png";
import i2 from "../../assets/portfolio/fab1.png";
import i3 from "../../assets/portfolio/sriAmbikaPlast.jpg";
import i4 from "../../assets/portfolio/i6.jpg";
import i5 from "../../assets/portfolio/solar-fintech.jpg";
import i6 from "../../assets/portfolio/playpaws.jpg";
import i7 from "../../assets/portfolio/silveLine2.jpg";
import i8 from "../../assets/portfolio/innomatricsSite.jpg";
import i9 from "../../assets/portfolio/billingSoft.jpg";
import i10 from "../../assets/portfolio/casino-game.jpg";

import doodle from "../../assets/portfolioBg.jpg";
import { BackgroundBeams } from "../ui/background-beams";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  const data = [
    // {
    //   color: "orange",
    //   image: i1,
    //   url: "" ,
    //   title: "Bint Al Hind",
    //   desc: "An incense stick e commerse website displayinng their products adn allowing client to reach out to them for contact.",
    // },
    {
      image: i2,
      color: "sky",
      url: "https://www.kkindustrie.com/",
      gitUrl: "https://github.com/akshitchowdhury/fabrication.git",
      title: "KK Industries",
      desc: "An online website for a fabricaionn industry with description and access to their services.",
    },
    {
      image: i3,
      color: "violet",
      url: "https://sri-ambika-plast.vercel.app/",
      gitUrl: "https://github.com/akshitchowdhury/SriAmbikaPlast.git",
      title: "Shri Ambika Plast",
      desc: "A Pipe manufacturer business with their business products and quality description.",
    },
    {
      image: i4,
      color: "rose",
      url: "https://github.com/akshitchowdhury/Poke_app.git",
      gitUrl: "",
      title: "Poke Store",
      desc: "A client side web design for an online Poke dtore owned by an European client.",
    },
    {
      image: i5,
      url: "https://solar-fintech.vercel.app/",
      color: "amber",
      gitUrl: "https://github.com/akshitchowdhury/solar_fintech.git",
      title: "Solar Fintech",
      desc: "A Solar Fintech based startup website designed as per client's requirements",
    },
    {
      image: i6,
      color: "indigo",
      url: "https://playpawws.com/",
      gitUrl: "https://github.com/akshitchowdhury/playPaw.git",
      title: "Play Pawws",
      desc: "Online business website for kid's play zone arena with subscription features.",
    },
    {
      image: i7,
      color: "red",
      url: "https://silverlinetoursandtravels.com/",
      gitUrl: "https://github.com/akshitchowdhury/silver_travels.git",
      title: "Silverline Tours & Travels",
      desc: "A travels and tours company whose business website was built using cutting edge tech and making it user centric.",
    },
    {
      image: i8,
      color: "yellow",
      url: "innomatricstech.com",
      gitUrl: "https://github.com/akshitchowdhury/Innomatrics_Site.git",
      title: "Innomatrics Technologies",
      desc: "A client side business wensite for a tech consultant company.",
    },
    {
      image: i9,
      color: "indigo",
      url: "https://inno-bill-client.vercel.app/",
      gitUrl: "https://github.com/akshitchowdhury/Inno_Billing.git ",
      title: "Innomatrics Billing Software",
      desc: "A Full stack billing software/app to track and generate invoice for clients.",
    },
    {
      image: i10,
      color: "red",
      url: "https://casino-game-ochre.vercel.app/",
      gitUrl: "https://github.com/akshitchowdhury/Casino-game.git",
      title: "Casino ree play game",
      desc: "A Casino based point system game created using React.",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${doodle})`,
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="text-white md:absolute  
      transition ease-in-out duration-300 mx-4
  md:mx-0      absolute inset-y-48  md:inset-24 text-3xl 
      md:text-7xl  font-semibold  -my-4"
        >
          Crafting Digital Experiences:
          <br></br>
          <hr className="bg-white w-full h-1 my-2"></hr>
          <h1 className="text-lg md:text-3xl text-sky-200 mx-4 my-4">
            Explore the Intersection of Code and Creativity
          </h1>
        </div>
      </div>

      <div className="bg-black p-5 md:p-28">
        <h1
          className="text-white
    text-lg md:mx-96 my-4"
        >
          Your's might be the next one on the cards..
        </h1>
        <div
          className="container    

       p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
            {/* Card 1 */}
            {data.map((item, index) => (
              <Link to={item.url} target="_blank" key={index}>
                <div
                  className={`bg-white rounded-lg shadow-lg shadow-slate-500 overflow-hidden h-96 
      hover:bg-${item.color}-400 transition duration-300 ease-in-out`}
                >
                  <div className="h-2/3 overflow-hidden">
                    <img
                      src={item.image}
                      alt="Placeholder"
                      className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-row justify-between items-center">
                    <div>
                      <h3 className="text-xl text-black font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                    <Link to={item.gitUrl} target="_blank">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Portfolio;
