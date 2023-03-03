import React, { useState } from 'react';
import moment from 'moment';
import CalendarHeader from './calendar-header';
import CalendarGrid from './calendar-grid';
import EventInfo from './event-info';
import './index.css';

export const Calendar = () => {

  let [currentDate, setCurrentDate] = useState(moment());
  let [eventInfo, setEventInfo] = useState(null);
  let [showInfo, setShowInfo] = useState(false);
  moment.updateLocale('ru', { week: { dow: 1 } })
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

  console.log(eventInfo);
  console.log(showInfo);

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
          />
        )
      }
    </div>
  )
}

export default Calendar;