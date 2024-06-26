// MapLeaflet.js
import React from 'react';

const MapLeaflet = () => {
  return (
    <div className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1357417352647!2d77.60496537411908!3d12.898991916467947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152acb0882b9%3A0xde34500a96e556!2sMakana%20Serenity%20Rentmystay!5e0!3m2!1sen!2sin!4v1719416816168!5m2!1sen!2sin"
        width="100%"
        
        className='
        h-[270px] md:h-full'
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLeaflet;
