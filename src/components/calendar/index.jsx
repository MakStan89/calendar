import React, { useState } from 'react';
import moment from 'moment';
import CalendarHeader from './calendar-header';
import CalendarGrid from './calendar-grid';
import './index.css';

export const Calendar = () => {

  const [currentDate, setCurrentDate] = useState(moment());
  moment.updateLocale('ru', { week: { dow: 1 } })
  const startDay = currentDate.clone().startOf('month').startOf('week')
  const prevMonthHandler = () => {
    setCurrentDate(prev => prev.clone().subtract(1, 'month'));
  }
  const nextMonthHandler = () => {
    setCurrentDate(prev => prev.clone().add(1, 'month'));
  }

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
      />
    </div>
  )
}

export default Calendar;