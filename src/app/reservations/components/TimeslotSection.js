import React, { useCallback } from 'react';
import TimeslotGenerator from "./TimeslotGenerator";

function TimeslotSection({ date, dateTimeslots, dateSelectedTimes, updateReservationState }) {
    const formatDate = useCallback((date) => {
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }, []);

    const isWeekday = useCallback((date) => {
        const day = date.getDay();
        return day >= 1 && day <= 5; // Monday is 1, Friday is 5
    }, []);

    const handleTimeslotSelect = useCallback((selectedTime) => {
        const formattedDate = formatDate(date);
        updateReservationState(prevState => ({
            dateSelectedTimes: {
                ...prevState.dateSelectedTimes,
                [formattedDate]: [...(prevState.dateSelectedTimes[formattedDate] || []), selectedTime]
            }
        }));
    }, [date, formatDate, updateReservationState]);

    const handleTimeslotDeselect = useCallback((deselectedTime) => {
        const formattedDate = formatDate(date);
        updateReservationState(prevState => ({
            dateSelectedTimes: {
                ...prevState.dateSelectedTimes,
                [formattedDate]: prevState.dateSelectedTimes[formattedDate]?.filter(time => time !== deselectedTime) || []
            }
        }));
    }, [date, formatDate, updateReservationState]);

    const updateDateTimeslots = useCallback((timeOfDay, timeslots) => {
        const formattedDate = formatDate(date);
        updateReservationState(prevState => ({
            dateTimeslots: {
                ...prevState.dateTimeslots,
                [formattedDate]: {
                    ...(prevState.dateTimeslots[formattedDate] || {}),
                    [timeOfDay]: timeslots
                }
            }
        }));
    }, [date, formatDate, updateReservationState]);

    const formattedDate = formatDate(date);

    return (
        <div>
            <TimeslotGenerator
                isWeekday={isWeekday(date)}
                dateTimeslots={dateTimeslots[formattedDate] || {}}
                selectedTimes={dateSelectedTimes[formattedDate] || []}
                onTimeslotSelect={handleTimeslotSelect}
                onTimeslotDeselect={handleTimeslotDeselect}
                updateDateTimeslots={updateDateTimeslots}
                date={date}
            />
        </div>
    );
}

export default TimeslotSection;