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
            Welcome to my Gallery
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
            <h3 className="text-xl font-semibold mb-2">Empowering Innovation</h3>
            <p className="text-gray-700 text-sm">At Innomatrics Technologies, we empower innovation by providing cutting-edge tech solutions tailored to meet the needs of our clients.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i2} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Driving Digital Transformation</h3>
            <p className="text-gray-700 text-sm">Our mission is to drive digital transformation for businesses by leveraging cutting-edge technologies.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i3} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Delivering Excellence</h3>
            <p className="text-gray-700 text-sm">We are committed to delivering excellence by providing high-quality, reliable, and scalable tech solutions.</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i4} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i5} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-orange-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i6} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i7} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-orange-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i8} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={i9} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
    </>
  )
}

export default Portfolio
