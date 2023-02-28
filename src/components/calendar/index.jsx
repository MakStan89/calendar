import React from 'react';
import moment from 'moment';
import CalendarHeader from './calendar-header';
import CalendarGrid from './calendar-grid';
import './index.css';

export const Calendar = () => {

  moment.updateLocale('en', { week: { dow: 1 } })
  const startDay = moment().startOf('month').startOf('week')
  const endDay = moment().endOf('month').endOf('week')
  const arrayOfDates = [];
  let day = startDay.clone();

  while (!day.isAfter(endDay)) {
    arrayOfDates.push(day.clone());
    day.add(1, 'day')
  }

  console.log(arrayOfDates)

  return (
    <div className='calendar'>
      <CalendarHeader />
      <CalendarGrid />
    </div>
  )
}

export default Calendar;