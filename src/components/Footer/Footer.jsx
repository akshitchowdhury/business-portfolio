import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import MapLeaflet from '../Contact/MapLeaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Footer.css';

const Footer = () => {
  const fixedLocation = [13.0270199,77.6334501]; // Fixed location coordinates
  const [userLocation, setUserLocation] = useState(null);

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    // Get user's geolocation
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error getting geolocation:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  const handleMarkerClick = () => {
    const [lat, lng] = fixedLocation;
    const description = "Description of the fixed location";

    // Open Google Maps URL in a new tab
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${description}`
    );
  };





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
                <Link to="/" className="navbar-links">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="navbar-links">About Us</Link>
              </li>
              <li className="mb-4">
                <Link to="/services" className="navbar-links">Services</Link>
              </li>
              <li className="mb-4">
                <Link to="/portfolio" className="navbar-links">Portfolio</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="navbar-links">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Services</h2>
  <ul className="miniServices text-gray-500 dark:text-gray-400 font-medium">
    <Link to="/webdesign">
    <li className="mb-4">
      Web Design
    </li>
    </Link>

    <Link to="/webdev">
    <li className="mb-4">
      Web Development
    </li>
    </Link>

    <Link to="/appdev">
    <li className="mb-4">
      App Development
    </li>
    </Link>
  </ul>
</div>


                <MapLeaflet />
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
