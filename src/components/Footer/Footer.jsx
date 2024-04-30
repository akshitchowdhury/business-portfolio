import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import MapLeaflet from '../Contact/MapLeaflet/MapLeaflet';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerBlock1 mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="address col-span-2 md:col-span-1 mb-6 md:mb-0 md:mr-4">
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Address</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">
            2nd Floor, Akshay Complex, No. 01, 16th Main Rd, near Bharat Petroleum, BTM 2nd Stage, Bengaluru, Karnataka 560076
            </p>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Phone: +91 8638498584<br/>
              Email: akshitchowdhury@gmail.com
            </p>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Quick Links</h2>
            <ul className="Qlinks text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className="navbar-links">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="navbar-links">About Us</Link>
              </li>
              <li className="mb-4">
                <Link to="/projects" className="navbar-links">Projects</Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="navbar-links">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Services</h2>
  <ul className="miniServices text-gray-500 dark:text-gray-400 font-medium">
    <li className="mb-4">
      Web Design
    </li>
    <li className="mb-4">
      Web Development
    </li>
    <li className="mb-4">
      App Development
    </li>
    
  </ul>
</div>


          <div className="footerMap col-span-2 md:col-span-1">

          <MapLeaflet className="mapFooter"/>



          </div>
        </div>
      </div>

      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">Akshit_Chowdhury</a>. All Rights Reserved.</span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          {/* Add other social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
