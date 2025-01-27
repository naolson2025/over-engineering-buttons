'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const animationImages = [
  '/1.svg',
  '/2.svg',
  '/3.svg',
  '/4.svg',
  '/5.svg',
  '/6.svg',
  '/7.svg',
  '/6.svg',
  '/5.svg',
  '/4.svg',
  '/3.svg',
  '/2.svg',
  '/1.svg',
];

const LilBlueButton = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = async () => {
    // jump animation
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 300);

    // picture animation
    for (let i = 1; i < animationImages.length; i++) {
      setTimeout(() => {
        setAnimationIndex(i);
      }, i * 50);
    }
  };

  return (
    <>
      <button onClick={handleClick}>
        <Image
          width={100}
          height={100}
          src={animationImages[animationIndex]}
          alt="lil blue monster animation"
          className={`duration-300 ${isJumping ? '-translate-y-6' : ''}`}
        />
      </button>
      <div
        className="tooltip tooltip-open"
        data-tip="Click me to submit!"
      ></div>
    </>
  );
};

export default LilBlueButton;
