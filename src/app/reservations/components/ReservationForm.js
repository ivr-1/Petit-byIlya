import React from 'react';
import DateAndGuestSelector from './DateAndGuestSelector';
import TimeslotSection from './TimeslotSection';
import PersonalInfoForm from './PersonalInfoForm';

function ReservationForm({ reservationState, updateReservationState, handleSubmit }) {
  const hasSelectedTime = Object.values(reservationState.dateSelectedTimes).some(times => times.length > 0);
  
  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const isFormValid = reservationState.name.trim() !== '' && isValidEmail(reservationState.email);

  return (
    <form onSubmit={handleSubmit}>
      <DateAndGuestSelector
        guests={reservationState.guests}
        date={reservationState.date}
        updateReservationState={updateReservationState}
      />
      <TimeslotSection
        date={reservationState.date}
        dateTimeslots={reservationState.dateTimeslots}
        dateSelectedTimes={reservationState.dateSelectedTimes}
        updateReservationState={updateReservationState}
      />
      {hasSelectedTime && (
        <>
          <PersonalInfoForm
            name={reservationState.name}
            email={reservationState.email}
            updateReservationState={updateReservationState}
          />
          <button 
            type="submit" 
            disabled={!isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.5, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
          >
            Make Reservation
          </button>
        </>
      )}
    </form>
  );
}

export default ReservationForm;