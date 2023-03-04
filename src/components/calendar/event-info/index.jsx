import React from 'react';
import './index.css';

export const EventInfo = ({ event, openModal }) => {

  let regexLink = /<a href=".*>(.{0,})<\/a>/g;
  let regexImportant = /(.{0,})<b>(.{0,})<b>(.{0,})/g;

  return (
    <div className="info">
      {<div className="info-item">
        <div className="info-item__title">{event.title}</div>
        <div className="info-item-date">
          <span className="info-item-date__icon"></span>
          <span className="info-item-date__info">{event.date} {event.duration} час. </span>
        </div>
        <span className="info-item__adress">{event.adress || event.city || ''}</span>
        <button className="info-item__button button" onClick={() => openModal()} >Запись</button>
        <div className="info-item__text">
          {event.text
            .replace(regexImportant, '$1 $2 $3')
            .replace(regexLink, '$1')
            .split('<br>')
            .map((text, index) =>
              <p key={index}>{text}</p>)}
        </div>
        <div className="info-item__organizator organizator">
          <div className="organizator-icon"></div>
          <div className="organizator-info">
            <div className="organizator-info__name">{event.organizator}</div>
            <div>Организатор</div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default EventInfo;