'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import CTA from './components/home-cta';
import ReviewCarousel from './components/home-reviewCarousel';
import Hero from '../components/hero';
import Ratings from '../components/elements/ratingicons';


import Logo from '@/app/assets/logo.png'
import MenuImg from '@/app/assets/home-cta-menu.png'
import OrderImg from '@/app/assets/home-cta-order.png'
import StoryImg from '@/app/assets/home-cta-story.png'
import HeroImage from '@/app/assets/heroImages/hero-home.png'

import './home.css';


function Home({setReserveShow}) {
  const breakpoint = 1001;
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const heroLogo = (
    <div className="hero-logo">
      <Image src={Logo} alt="Le Petit Croissant Logo" className="hero-logo-img" style={{height: '100%', width: '100%'}} />
      <header className="hero-logo-text">Le Petit Croissant</header>
    </div>
  )
  
  const heroTagline = (
    <div className='hero-tagline'> 
      <p> Indulge in Parisian charm </p>
      <Ratings iconSize= {80} iconGap="50px" />
    </div>
  )

  return (
    <div className="home-section">

      <Hero 
        headerText={!isMobile? heroLogo : null}
        headerTagline={heroTagline}
        heroImage={HeroImage.src} 
      />
      <div className="ctaContainer">
        <CTA 
          headerText="Specialties" 
          descriptionText="Savor our fresh baguettes. Delight in colorful macarons." 
          contentImg={MenuImg} 
          imgAlt="Freshly baked baguette"
          buttonText="Full Menu"
          buttonLink="/foodmenu"
          bgColor="#FFA1A1"
        />
        <CTA
          headerText="France delivered"
          descriptionText="Parisian delights, from our kitchen to your doorstep."
          contentImg={OrderImg}
          imgAlt="A plate with gourmet food, egg and caviar"
          buttonText="Order Online"
          buttonLink="/order"
          bgColor="#FFC6C6"
        />
        <CTA 
          headerText="Our Journey" 
          descriptionText="Our culinary adventure: from French roots to local Chicago favorite." 
          contentImg={StoryImg} 
          imgAlt="Flag of France"
          buttonText="About Us"
          buttonLink="/story"
          bgColor="#FFA1A1"
        />
      </div>
      <ReviewCarousel />
  </div>
  );
}

export default Home;


