import React from 'react';
import Image from 'next/image';

import Hero from '../components/hero';

import HeroImage from '@/app/assets/heroImages/hero-story.png'
import Roller from '@/app/assets/story-roller.png'
import Tower from '@/app/assets/story-tower.png'
import Statue from '@/app/assets/story-statue.png'

import './story.css';

export const metadata = {
  metadataBase: new URL('https://petit.byIlya.com'),
  title: 'Our Story',
  description: 'Learn more about the history of Le Petit Croissant.',
  openGraph: {
    title: "Our Story - Le Petit Croissant",
    description: "Discover the legacy of our restaurant.",
    images: [
      {
        url: '/og-story.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

function Story() {
  const headerText = (
    <header>
        Our Story
    </header>
  )
  
  const heroTagline = (
    <div> 
      <p> From Montmartre to Main Street </p>
    </div>
  )

  return (
    <div className="story-section">
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage.src}
      />
      <div className="bio">
        <Image src={Tower} alt='eiffel tower'/>
        <article>
            <h2> Elaine & Marcel </h2>
            <p>Elaine, a Le Cordon Bleu graduate with a flair for innovative flavors, and Marcel, winner of the prestigious &#34;Best Baguette in Paris&#34; award, combined their talents to open a tiny bakery in Montmartre. Their little shop quickly became the talk of the town, earning a coveted Michelin star within its first year. Locals and tourists alike lined up daily for Marcel&#39;s heavenly baguettes and Elaine&#39;s creative éclairs.</p>
            <Image src={Roller} alt='dough roller'/>
            <p> Dreaming of new adventures, the couple decided to bring a taste of Paris across the Atlantic. They packed their rolling pins, secret recipes, and an unshakeable passion for French baking. In a cozy corner of their new American home, Elaine and Marcel opened Le Petit Croissant. Here, they continue to sprinkle a bit of French magic into their community, delighting patrons with authentic flavors and warm hospitality. </p>
        </article>
        <Image src={Statue} alt='statue of liberty'/>
    </div>
  </div>
  );
}

export default Story;


