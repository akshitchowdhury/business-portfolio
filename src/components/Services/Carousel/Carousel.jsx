import React, { useState, useEffect } from 'react';



'use client';

import { Carousel } from 'flowbite-react';

function carousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={c1} alt="..." />
        <img src={c2} alt="..." />
        <img src={c3} alt="..." />
      </Carousel>
    </div>
  );
}


export default carousel;