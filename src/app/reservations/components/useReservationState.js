import { useState, useEffect, useCallback } from 'react';

const useReservationState = () => {

  const [isActive, setIsActive] = useState(false);
  const [reservationState, setReservationState] = useState({
    guests: '2',
    date: new Date(),
    dateTimeslots: {},
    dateSelectedTimes: {},
    name: '',
    email: '',
    reservationComplete: false,
  });

  const cleanup = useCallback(() => {
    document.body.style.overflow = 'unset';
    document.body.style.pointerEvents = 'auto';
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset'; 
    }
    return () => {
      document.body.style.overflow = 'unset'; 
    };
  }, [isActive]);

  const handleClose = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      cleanup();
      setReservationState((prev) => ({ ...prev, reservationComplete: false }));
    }, 300);
  }, [cleanup]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  const updateReservationState = useCallback((updates) => {
    setReservationState((prev) => {
      const newState = { ...prev };
      if (typeof updates === 'function') {
        return { ...newState, ...updates(newState) };
      }
      if (updates.date && updates.date !== prev.date) {
        newState.dateSelectedTimes = {};
      }
      return { ...newState, ...updates };
    });
  }, []);

  const handlePost = useCallback(async () => {
    const response = await fetch('api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationState)
    });
    const newReservation = await response.json();
    console.log(newReservation);
  }, [reservationState]);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    handlePost();
    setReservationState((prev) => ({ ...prev, reservationComplete: true }));
  }, [handlePost]);


  return {
    isActive,
    handleClose,
    handleOverlayClick,
    reservationState,
    updateReservationState,
    handleSubmit,
    setIsActive,
  };
};

export default useReservationState;