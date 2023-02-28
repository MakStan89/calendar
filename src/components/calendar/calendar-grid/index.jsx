import React from 'react';
import './index.css';

export const CalendarGrid = ({ startDay }) => {

  const daysCount = 42;
  const day = startDay.clone().subtract(1, 'day');

  const daysArray = [...Array(daysCount)].map(() => day.add(1, 'day').clone());


  return (
    <div className='calendar-grid grid'>
      {daysArray.map((date) => (
        <div key={date.format('DDMMYYYY')} className='grid-cell'>
          <div className='grid-cell__number'>
            {date.format('D')}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CalendarGrid;