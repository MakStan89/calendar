import React from 'react';
import events from '../../events';
import './index.css';

export const UpcomingEvents = ({ openModal }) => {

  let regexLink = /<a href=".*>(.{0,})<\/a>/g;
  let regexImportant = /(.{0,})<b>(.{0,})<b>(.{0,})/g;

  const dateToNumber = (date) => {
    return Date.parse(date) / 1000;
  };

  let sortedEvents = events.sort((a, b) => dateToNumber(a.date) - dateToNumber(b.date));

  const styleChange = (event) => {
    if (event.type) {
      return "events-item__type true-type"
    } else {
      return "events-item__type"
    }
  }

  return (

    <div className="events">
      <h1 className="events-title">Ближайшие<span>мероприятия</span></h1>
      <div className="events-list">
        {sortedEvents.map((event) => (
          <div className="events-item" key={event.id}>
            <div className={styleChange(event)}></div>
            <span className="events-item__date">{event.date}</span>&nbsp;
            <span className="events-item__duration">{event.duration} час.</span>&nbsp;
            <span className="events-item__adress">{event.adress || event.city || ''}</span>&nbsp;
            <div className="events-item__title">{event.title}</div>
            <div className="events-item__text">
              {event.text
                .replace(regexImportant, '$1 $2 $3')
                .replace(regexLink, '$1')
                .split('<br>')
                .map((text, index) =>
                  <p key={index}>{text}</p>)}
            </div>
            <div className="events-item__organizator">{event.organizator}</div>
            <div className="events-item-registration">
              <button className="events-item-registration__button button" onClick={() => openModal()}>Запись</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingEvents;