import React from 'react';
import c1 from '../../../assets/app2.jpg';
import c2 from '../../../assets/webDesign2.jpg';
import c3 from '../../../assets/webDevelopment.jpg';

import './ImageCardContainer.css'
import { Link } from 'react-router-dom';

const ImageCard = ({linkUrl, imageUrl, text }) => {
  return (
    <Link to={linkUrl}>
    <div className="Icard relative overflow-hidden rounded-lg shadow-lg">
    
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-50">
        <p className="text-sm text-white">{text}</p>
      </div>
      
    </div>
    </Link>
  );
};

const ImageCardContainer = () => {
  const cards = [
    {
      imageUrl: c1,
      text: 'App Development',
      linkUrl: "/appdev"
    },
    {
      imageUrl: c2,
      text: 'Web Design',
      linkUrl: "/webdesign"
    },
    {
      imageUrl: c3,
      text: 'Web Development',
      linkUrl: "/webdev"
    },
    
  ];

  return (
    <div className="Icontainer  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
             <ImageCard key={index} imageUrl={card.imageUrl} text={card.text} linkUrl={card.linkUrl} />
      ))}
    </div>
  );
};

export default ImageCardContainer;
