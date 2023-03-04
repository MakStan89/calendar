import React, { useState } from 'react';
import moment from 'moment';
import CalendarHeader from './calendar-header';
import CalendarGrid from './calendar-grid';
import EventInfo from './event-info';
import './index.css';

export const Calendar = ({ openModal, showInfo, setShowInfo }) => {
  moment.updateLocale('en', { week: { dow: 1 } })
  const [currentDate, setCurrentDate] = useState(moment());
  const [eventInfo, setEventInfo] = useState(null);
  const startDay = currentDate.clone().startOf('month').startOf('week');
  const prevMonthHandler = () => {
    setCurrentDate(prev => prev.clone().subtract(1, 'month'));
  }
  const nextMonthHandler = () => {
    setCurrentDate(prev => prev.clone().add(1, 'month'));
  }
  const eventViewHandler = (event) => {
    setShowInfo(true);
    setEventInfo(event)
  };
  const closeInfoHandler = () => {
    setTimeout(() => {
      setShowInfo(false);
      setEventInfo(null);
    }, 4000);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        currentDate={currentDate}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
      />
      <CalendarGrid
        startDay={startDay}
        currentDate={currentDate}
        eventViewHandler={eventViewHandler}
        closeInfoHandler={closeInfoHandler}
      />
      {
        showInfo &&
        (
          <EventInfo
            event={eventInfo}
            openModal={openModal}
          />
        )
      }
    </div>
  )
}

export default Calendar;