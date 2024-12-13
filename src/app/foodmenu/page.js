import React from 'react';

import Hero from '../components/hero';
import FoodMenuTable from './components/foodmenu-table'

import HeroImage from '@/app/assets/heroImages/hero-foodmenu.png';

import './foodmenu.css';

export const metadata = {
  metadataBase: new URL('https://petit.byIlya.com'),
  title: 'Menu',
  description: 'Explore our delicious menu offerings',
  openGraph: {
    title: "Menu - Le Petit Croissant",
    description: "Explore our delicious menu offerings.",
    images: [
      {
        url: '/og-menu.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};


function Foodmenu() {
  const headerText = (
    <header>
        Menu
    </header>
  )
  
  const heroTagline = (
    <div> 
      <p> Authentic flavors, artisanal passion </p>
    </div>
  )

  return (
    <div>
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage.src}
      />
      <div className="food-menu-container">
        <FoodMenuTable />
      </div>
  </div>
  );
}

export default Foodmenu;


