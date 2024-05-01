import React from 'react'

import i1 from '../../assets/portfolio/bint1.png'
import i2 from '../../assets/portfolio/fab1.png'
import i3 from '../../assets/portfolio/i4.jpg'
import i4 from '../../assets/portfolio/i6.jpg'
import i5 from '../../assets/portfolio/p3.png'
import i6 from '../../assets/portfolio/playpaws.jpg'
import i7 from '../../assets/portfolio/silveLine2.jpg'
import i8 from '../../assets/portfolio/innomatricsSite.jpg'
import i9 from '../../assets/portfolio/billingSoft.jpg'

import doodle from '../../assets/portfolioBg.jpg' 
const Portfolio = () => {
  return (
    <>
    
<div 
    style={{backgroundImage: `url(${doodle})`,
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundAttachment: 'fixed'}}>

<div
            className="text-white md:absolute  
      transition ease-in-out duration-300 
      absolute inset-y-48  md:inset-24 text-3xl 
      md:text-7xl  font-semibold  -my-4"
          >
            Crafting Digital Experiences:
             
            <br></br>
            <hr className='bg-white w-full h-1 my-2'></hr>
            <h1 className= "text-3xl text-sky-200 mx-4 my-4">Explore the Intersection of Code and Creativity</h1>
          </div>

    
</div>

{/* 
    style={{backgroundImage: `url(${doodle})`}} */}

    <div className='bg-black p-5 md:p-28'>

    <h1
    className='text-white
    text-lg md:mx-96 my-4'>Your's might be the next one on the cards..</h1>
       <div className="container    

       p-4"
       >
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-orange-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src= {i1} alt="Placeholder" className="w-full rounded h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Bint Al Hind </h3>
            <p className="text-gray-700 text-sm">An incense stick e commerse website displayinng their products adn allowing client to reach out 
            to them for contact.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i2} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">KK Industries</h3>
            <p className="text-gray-700 text-sm">An online website for a fabricaionn industry with description and access to their services.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i3} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Infinty Travels</h3>
            <p className="text-gray-700 text-sm">A travels and transportation business with features to booka ride and more.</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i4} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Poke Store</h3>
            <p className="text-gray-700 text-sm">A client side web design for an online Poke dtore owned by an European client.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i5} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Alwyn Packers & Movers</h3>
            <p className="text-gray-700 text-sm">A Packers and movers website with features to contact; view videos and avail services.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-orange-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i6} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Play Pawws</h3>
            <p className="text-gray-700 text-sm">Online business website for kid's play zone arena with subscription features.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i7} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Silverline Tours & Travels</h3>
            <p className="text-gray-700 text-sm">A travels and tours company whose business website was built using cutting edge tech and making it 
            user centric.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-orange-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i8} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Innomatrics Technologies</h3>
            <p className="text-gray-700 text-sm">A client side business wensite for a tech consultant company.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i9} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Innomatrics Billing Software</h3>
            <p className="text-gray-700 text-sm">A Full stack billing software/app to track and generate invoice for clients.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
    </>
  )
}

export default Portfolio
