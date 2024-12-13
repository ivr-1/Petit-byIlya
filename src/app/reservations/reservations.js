
import React from 'react';
import './reservations.css';
import ReservationForm from './components/ReservationForm';
import { useLayoutEffect, useState } from 'react';

function Reservations({
  isActive,
  handleClose,
  handleOverlayClick,
  reservationState,
  updateReservationState,
  handleSubmit,
}) {


  

  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ConfirmationText = (
    <div className="confirmation-text">
      <p>
        Your{' '}
        <span>
          reservation for {reservationState.guests} on{' '}
          {reservationState.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} at{' '}
          {(reservationState.dateSelectedTimes[
            reservationState.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
          ] || []
          ).join(', ')}
        </span>{' '}
        is confirmed.
      </p>
      <p>We sent a confirmation email to {reservationState.email}.</p>
      <p>
        If you have any special requests or dietary requirements, please respond to that email, and we&#39;ll
        be happy to accommodate you.
      </p>
      <p>We&#39;re looking forward to providing you with an exceptional dining experience!</p>
      <p>Elaine and Marcel</p>
    </div>
  );

  return (
    <div
      className={`reserve-overlay ${isActive ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`reserve-section ${isActive ? 'active' : ''}`}>
        <div className="reserve-head">
          <h1>
            {reservationState.reservationComplete
              ? `Thank you, ${reservationState.name}`
              : `Reservations`}
          </h1>
          <button type="button" onClick={handleClose}>
            ×
          </button>
        </div>
        {reservationState.reservationComplete ? (
          ConfirmationText
        ) : (
          <div className="reserve-content">
            <ReservationForm
              reservationState={reservationState}
              updateReservationState={updateReservationState}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservations;