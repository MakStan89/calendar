import React, { useState } from 'react';
import './index.css';

export const Modal = ({ closeModal }) => {

  const [checked, setChecked] = useState(false);

  const styleAgreementChange = (checked) => {
    if (!checked) {
      return "modal-form-agreement__text"
    } else {
      return "modal-form-agreement__text checked-agreement"
    }
  }

  return (

    <div className="background" onClick={e => (e.currentTarget === e.target) && closeModal()} >
      <div className="modal" >
        <form className="modal-form">
          <div className="modal-form-name">
            <div className="modal-form-field small-field">
              <div className="modal-form-name__label input-label required-input">Имя</div>
              <input type='text' placeholder='Имя' className="modal-form-name__firstname" required />
            </div>
            <div className="modal-form-field small-field">
              <div className="modal-form-name__label input-label required-input">Фамилия</div>
              <input type='text' placeholder='Фамилия' className="modal-form-name__lastname" required />
            </div>
          </div>
          <div className="modal-form-field">
            <div className="modal-form-phone__label input-label required-input">Телефон</div>
            <input type='number' placeholder='Телефон' className="modal-form__phone" required />
          </div>
          <div className="modal-form-field">
            <div className="modal-form-email__label input-label">Email</div>
            <input type='email' placeholder='Email' className="modal-form__email" />
          </div>
          <div className="modal-form-field">
            <div className="modal-form-organization__label input-label">Организация</div>
            <input type='text' placeholder='Организация' className="modal-form__organization" />
          </div>
          <div className="modal-form-agreement">
            <input type='checkbox' className="modal-form-agreement__mark" onChange={() => setChecked(!checked)} checked={checked} required />
            <p className={styleAgreementChange(checked)}>
              Я согласен с условиями <a href='https://mhtest.ru/license-agreement' target="_blank">Лицензионного соглашения</a> и даю согласие на обработку моих персональных данных.
            </p>
          </div>
          <button type='submit' className="modal-form-button button">Стать участником</button>
        </form>
        <button className="modal-close" onClick={() => closeModal()}></button>
      </div>
    </div >
  )
}

export default Modal;