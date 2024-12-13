
'use client';
import React, { useState, useEffect } from 'react';
import './navigation.css';
import DesktopNav from './desktopnav.js'; 
import MobileNav from './mobilenav.js'; 
import Reservations from '../reservations/reservations';
import useReservationState from '../reservations/components/useReservationState';

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const reservationHook = useReservationState(); // Holds reservation state and handlers

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNav setIsActive={reservationHook.setIsActive} />
      ) : (
        <DesktopNav setIsActive={reservationHook.setIsActive} />
      )}
      <Reservations {...reservationHook} />
    </>
  );
}

export default Navigation;