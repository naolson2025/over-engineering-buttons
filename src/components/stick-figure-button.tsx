'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const StickFigureButton = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  const handleClick = () => {
    for (let i = 1; i <= 4; i++) {
      setTimeout(() => {
        setAnimationIndex(i);
      }, i * 50); // Adjust timing as needed
    }
    setTimeout(() => setAnimationIndex(0), 250); // Reset to the initial state
  };

  const animationImages = [
    '/stick-figure-1.svg',
    '/stick-figure-2.svg',
    '/stick-figure-3.svg',
    '/stick-figure-4.svg',
    '/stick-figure-5.svg',
  ];

  return (
    <button onClick={handleClick}>
      <Image
        width={100}
        height={100}
        src={animationImages[animationIndex]}
        alt="Stick Figure Animation"
      />
    </button>
  );
};

export default StickFigureButton;
