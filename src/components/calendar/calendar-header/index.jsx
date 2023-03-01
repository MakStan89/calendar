import React from 'react';
import './index.css';

export const CalendarHeader = ({ currentDate, prevMonthHandler, nextMonthHandler }) => {

  return (
    <div className="calendar-header header">
      <div className="header-switcher switcher">
        <button onClick={prevMonthHandler} className="switcher-back"></button>
        <span className="switcher-text">Выберите дату обучения</span>
        <button onClick={nextMonthHandler} className="switcher-forward"></button>
      </div>
      <div className="header-title" >
        {currentDate.format('MMMM YYYY')
          .replace('January', 'Январь')
          .replace('February', 'Февраль')
          .replace('March', 'Март')
          .replace('April', 'Апрель')
          .replace('May', 'Май')
          .replace('June', 'Июнь')
          .replace('July', 'Июль')
          .replace('August', 'Август')
          .replace('September', 'Сентябрь')
          .replace('October', 'Октябрь')
          .replace('November', 'Ноябрь')
          .replace('December', 'Декабрь')
        }
      </div>
    </div>
  )
}

export default CalendarHeader;