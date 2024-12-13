import React, { useState, useEffect } from 'react';

const filterTimeslots = (timeslots, startHour, endHour) => {
  return timeslots.filter(slot => {
    const [hours, minutes, period] = slot.match(/(\d+):(\d+)\s(AM|PM)/).slice(1);
    let hour = parseInt(hours);
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    return hour >= startHour && hour < endHour;
  });
};

const generateAllTimeslots = (isWeekday, interval = 15) => {
  const startHour = 6;
  const endHour = isWeekday ? 14 : 18;
  const timeslots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = new Date(2024, 0, 1, hour, minute);
      timeslots.push(time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }));
    }
  }
  return timeslots;
};

const getRandomTimeslots = (timeslots, count = 8) => {
  const shuffled = [...timeslots].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).sort((a, b) => {
    const timeA = new Date(`2024-01-01 ${a}`);
    const timeB = new Date(`2024-01-01 ${b}`);
    return timeA - timeB;
  });
};

const TimeslotGenerator = ({ isWeekday, handleSubmit, dateTimeslots, updateDateTimeslots, selectedTimes, onTimeslotSelect, onTimeslotDeselect, date }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [displayedTimeslots, setDisplayedTimeslots] = useState([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState('');
  const [fontSize, setFontSize] = useState('1.1rem'); 

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 800px)').matches) {
        setFontSize('0.9rem');
      } else {
        setFontSize('1.1rem');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSelectedSlot('');
    setSelectedTimeslot('');
    setDisplayedTimeslots([]);
  }, [date]);

  useEffect(() => {
    if (!selectedSlot) return;
    let filteredSlots;
    if (dateTimeslots[selectedSlot]) {
      filteredSlots = dateTimeslots[selectedSlot];
    } else {
      const allTimeslots = generateAllTimeslots(isWeekday);
      switch (selectedSlot) {
        case 'Morning':
          filteredSlots = getRandomTimeslots(filterTimeslots(allTimeslots, 6, 10));
          break;
        case 'Lunch':
          filteredSlots = getRandomTimeslots(filterTimeslots(allTimeslots, 10, 14));
          break;
        case 'Afternoon':
          filteredSlots = getRandomTimeslots(filterTimeslots(allTimeslots, 14, 18));
          break;
        default:
          filteredSlots = [];
      }
      updateDateTimeslots(selectedSlot, filteredSlots);
    }
    setDisplayedTimeslots(filteredSlots);
  }, [selectedSlot, isWeekday, dateTimeslots, updateDateTimeslots, date]);

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
    setSelectedTimeslot('');
  };

  const handleTimeslotChange = (event) => {
    const slot = event.target.value;
    if (selectedTimeslot !== slot) {
      if (selectedTimeslot) {
        onTimeslotDeselect(selectedTimeslot);
      }
      onTimeslotSelect(slot);
      setSelectedTimeslot(slot);
    }
  };

  const getRadioStyle = (value) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    backgroundColor: selectedSlot === value ? 'var(--primary)' : 'var(--background)',
    color: selectedSlot === value ? 'white' : 'var(--main-text)',
    border: `2px solid ${selectedSlot === value ? 'var(--primary)' : 'var(--primary-light)'}`,
    borderRadius: '20px',
    fontFamily: 'var(--font-secondary)',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });


  const getTimeslotStyle = (slot) => {

    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '9px',
      backgroundColor: selectedTimeslot === slot ? 'var(--primary)' : 'var(--background)',
      color: selectedTimeslot === slot ? 'white' : 'var(--main-text)',
      border: '1px solid var(--primary)',
      borderRadius: '8px',
      fontFamily: 'var(--font-secondary)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    };
    return {
      ...baseStyle,
      fontSize,
    };
  };


  return (
    <div>
      <div className="radio-group" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        {['Morning', 'Lunch', !isWeekday && 'Afternoon'].filter(Boolean).map((slot) => (
          <label key={slot} style={getRadioStyle(slot)}>
            <input
              type="radio"
              value={slot}
              checked={selectedSlot === slot}
              onChange={handleSlotChange}
              style={{ display: 'none' }}
            />
            {slot}
          </label>
        ))}
      </div>
      {selectedSlot && (
        <div className="timeslot-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {displayedTimeslots.map((slot, index) => (
            <label key={index} style={getTimeslotStyle(slot)}>
              <input
                type="radio"
                name="timeslot"
                value={slot}
                checked={selectedTimeslot === slot}
                onChange={handleTimeslotChange}
                style={{ display: 'none' }}
              />
              {slot}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeslotGenerator;