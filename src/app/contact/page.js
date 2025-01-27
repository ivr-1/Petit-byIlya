import React from 'react';
import Hero from '../components/hero';

import HeroImage from '@/app/assets/heroImages/hero-contact.png'

import './contact.css';


export const metadata = {
  metadataBase: new URL('https://petit.byIlya.com'),
  title: 'Contact',
  description: 'Get in touch with us',
  openGraph: {
    title: "Contact - Le Petit Croissant",
    description: "We'd love to hear from you. Contact us today!",
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};


function Contact() {
  const headerText = (
    <header>
      Contact Us
    </header>
  )
  const heroTagline = (
    <div>
      <p> Drop us a line, we&#39;re all ears </p>
    </div>
  )
  return (
    <div className="contact-section">
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage.src}
      />
      <section className="contact-container">
        <div className='contact-info'>
        </div>
        <section className='restaurant-info'>
          <div>
            <h1>Parking</h1>
            <p>Street parking is available along Main Street and adjacent side streets. Additionally, there&#39;s a public parking lot two blocks south of Le Petit Croissant, offering affordable rates.</p>
          </div>
          <div>
            <h1>Hours</h1>
            <p>Tue-Fri: 6AM-2PM <br></br>Sat-Sun: 6AM-6PM <br></br>Closed Mondays</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;