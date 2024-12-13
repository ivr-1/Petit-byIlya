import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png'; // Adjust the path
import Button from './elements/button';
import navItems from './navitems'; // Adjust the path
import './navigation.css';

function DesktopNav({ setIsActive }) {
  return (
    <nav aria-label="Main Navigation">
      <Link href="/">
        <div>
          <Image src={Logo} alt="Le Petit Croissant Logo" style={{ width: '100%', height: '100%' }} />
          <header>Le Petit Croissant</header>
        </div>
      </Link>
      <div>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button
        buttonText="Reserve a Table"
        marginOverride="0 10vw 0 0"
        heightOverride="32px"
        buttonLink=""
        handleClick={() => setIsActive(true)} 
      />
    </nav>
  );
}

export default DesktopNav;