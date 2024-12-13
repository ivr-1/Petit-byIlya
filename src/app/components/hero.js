import React from 'react';
import './hero.css';

function Hero({ headerText, heroImage, headerTagline }) {


  const imageStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className='hero'>
      <div className='text-container'>
          <div>{headerText}</div>
          <div>{headerTagline}</div>
        </div>
      <div className='image-container' style={imageStyle}> </div>
    </div>
  );
}

export default Hero;