
import { Link } from 'react-router-dom';
import './Footer.css'

import 'leaflet/dist/leaflet.css';
import './Footer.css';

const Footer = () => {

  const handleClick = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
              Whatsapp: +91 8638498584<br/>
              Email: akshitchowdhury@gmail.com
            </p>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Quick Links</h2>
            <ul className="Qlinks text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" onClick={handleClick} className="navbar-links">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" onClick={handleClick} className="navbar-links">About Us</Link>
              </li>
              <li className="mb-4">
                <Link to="/services" onClick={handleClick} className="navbar-links">Services</Link>
              </li>
              <li className="mb-4">
                <Link to="/portfolio" onClick={handleClick} className="navbar-links">Portfolio</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" onClick={handleClick} className="navbar-links">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Services</h2>
  <ul className="miniServices text-gray-500 dark:text-gray-400 font-medium">
    <Link onClick={handleClick} to="/webdesign">
    <li className="mb-4">
      Web Design
    </li>
    </Link>

    <Link to="/webdev" onClick={handleClick}>
    <li className="mb-4">
      Web Development
    </li>
    </Link>

    <Link to="/appdev" onClick={handleClick}>
    <li className="mb-4">
      App Development
    </li>
    </Link>
  </ul>
</div>

<div className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1357417352647!2d77.60496537411908!3d12.898991916467947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152acb0882b9%3A0xde34500a96e556!2sMakana%20Serenity%20Rentmystay!5e0!3m2!1sen!2sin!4v1719416816168!5m2!1sen!2sin"
        width="100%"
        height="70%"
        className="w-[300px] h-full md:w-[100%] md:h-[70%]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
                
        </div>
      </div>

      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 font-semibold dark:text-gray-300 
        mx-96 sm:text-center">© 2024 <a href="https://flowbite.com/">Akshit_Chowdhury</a>. All Rights Reserved.</span>
        
      </div>
    </footer>
  );
};

export default Footer;
