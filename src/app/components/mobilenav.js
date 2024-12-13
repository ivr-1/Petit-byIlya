import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png'; // Adjust the path
import Button from './elements/button';
import Social from './elements/socialicons';
import navItems from './navitems'; // Adjust the path
import { RxHamburgerMenu } from "react-icons/rx";
import './navigation.css';


const MobileNavBar = ({ setSplashOpen }) => (
    <nav>
      <Link href="/">
        <div>
          <Image src={Logo} alt="Le Petit Croissant Logo" />
          <header>Le Petit Croissant</header>
        </div>
      </Link>
      <RxHamburgerMenu
        style={{ cursor: 'pointer', WebkitTapHighlightColor: "transparent" }}
        onClick={() => setSplashOpen(true)}
        aria-label="Open-Menu"
      />
    </nav>
  );
  
  const MobileNavSplash = ({ splashOpen, setSplashOpen, setIsActive }) => (
    <nav className={`mobile-splash ${splashOpen ? 'open' : ''}`}>
      <ul className={splashOpen ? 'open' : ''}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <span onClick={() => setSplashOpen(false)}>{item.name}</span>
            </Link>
          </li>
        ))}
        <Button
          buttonText="Reserve a Table"
          marginOverride="0 0 0 0"
          heightOverride=""
          buttonLink=""
          handleClick={() => {
            setIsActive(true); 
          }}
        />
        <Social iconGap="35px" iconSize="30px" />
        <button className="mobile-splash-exit" onClick={() => setSplashOpen(false)}>
          ×
        </button>
      </ul>
    </nav>
  );

function MobileNav({ setIsActive }) {
    const [splashOpen, setSplashOpen] = useState(false);
    const [resize, setResize] = useState(false);
  
    useEffect(() => {
      let resizeTimer;
      const handleResize = () => {
        setResize(true);
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          setResize(false);
        }, 300);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      if (resize) {
        document.documentElement.style.setProperty('--transition-duration', '0s');
      } else {
        document.documentElement.style.setProperty('--transition-duration', '0.3s');
      }
      if (splashOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
      return () => {
        document.body.style.overflow = 'visible';
      };
    }, [resize, splashOpen]);

  
    return (
      <>
        <MobileNavBar setSplashOpen={setSplashOpen} />
        <MobileNavSplash splashOpen={splashOpen} setSplashOpen={setSplashOpen} setIsActive={setIsActive} />
      </>
    );
  }
  export default MobileNav;

