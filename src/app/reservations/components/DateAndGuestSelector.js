import React, { useEffect, useCallback, useMemo, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateAndGuestSelector({ guests, date, updateReservationState }) {
  const guestOptions = [2, 3, 4, 5, '6+'];
  const [isDateSelected, setIsDateSelected] = useState(false);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="custom-date-input" onClick={onClick} ref={ref}>
      {isDateSelected ? (value === formatDate(new Date()) ? `Today, ${value}` : value) : "Select a date"}
    </button>
  ));
  CustomInput.displayName = 'CustomInput';


  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const isDisabled = useCallback((date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 1; // Monday is 1
  }, []);

  const getNextAvailableDate = useCallback((startDate = new Date()) => {
    let nextDate = new Date(startDate);
    while (isDisabled(nextDate)) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    return nextDate;
  }, [isDisabled]);

  const maxDate = useMemo(() => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    return maxDate;
  }, []);

  useEffect(() => {
    if (date && !isDisabled(date)) {
      setIsDateSelected(true);
    } else {
      const nextAvailableDate = getNextAvailableDate();
      updateReservationState({ date: nextAvailableDate, dateSelectedTimes: {} });
      setIsDateSelected(false);
    }
  }, [date, isDisabled, getNextAvailableDate, updateReservationState]);

  const handleDateChange = (newDate) => {
    updateReservationState({ date: newDate, dateSelectedTimes: {} });
    setIsDateSelected(true);
  };

  return (
    <div className='date-time'>
      <div className="form-group">
        <label htmlFor="guests">Guests:</label>
        <select
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => updateReservationState({ guests: e.target.value })}
        >
          {guestOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <div>
          <DatePicker
            id="date"
            selected={isDateSelected ? date : null}
            onChange={handleDateChange}
            customInput={<CustomInput />}
            dateFormat="MMMM d"
            popperPlacement="bottom-start"
            filterDate={(date) => !isDisabled(date)}
            dayClassName={(date) => isDisabled(date) ? "disabled-date" : undefined}
            calendarStartDay={1}
            minDate={new Date()}
            maxDate={maxDate}
            calendarClassName="custom-datepicker"
          />
        </div>
      </div>
    </div>
  );
}

export default DateAndGuestSelector;