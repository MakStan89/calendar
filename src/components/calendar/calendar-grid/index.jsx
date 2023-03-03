import React from 'react';
import events from '../../../events';
import './index.css';

export const CalendarGrid = ({ startDay, currentDate, eventViewHandler, closeInfoHandler }) => {

  const daysCount = 42;
  const dayOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const day = startDay.clone();
  const daysArray = [...Array(daysCount)].map(() => day.add(1, 'day').clone());
  const isCurrentMonth = (date) => currentDate.isSame(date, 'month');
  const currentMonth = (date) => isCurrentMonth(date) ? 'grid-cell__number current-month' : 'grid-cell__number';
  const dateToNumber = (date) => {
    return Date.parse(date) / 1000;
  };
  const styleButtonChange = (event) => {
    if (event.type) {
      return "item-button white-button"
    } else {
      return "item-button"
    }
  };


  return (
    <div className="calendar-grid grid">
      <div className="grid-header">
        {dayOfWeek.map((el, index) => (
          <div key={index} className="grid-header__item">{el}</div>
        ))}
      </div>
      <div className="grid-wrapper">
        {daysArray.map((date) => (
          <div key={date.format('DDMMYYYY')} className="grid-cell">
            <div className={currentMonth(date)}>
              {date.format('D')}
            </div>
            <div className="grid-cell-events daily-list">
              {
                events
                  .filter((event) => dateToNumber(event.date) >= date.format('X') && dateToNumber(event.date) <= date.clone().endOf('day').format('X'))
                  .map((event) => (
                    <div key={event.id} className="daily-list-item item">
                      <button className={styleButtonChange(event)} onClick={() => eventViewHandler(event)} onMouseLeave={() => closeInfoHandler()}>
                        {event.title}
                      </button>
                    </div>
                  ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarGrid;