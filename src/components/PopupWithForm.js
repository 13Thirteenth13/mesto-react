import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
        <h3 className="popup__heading">{props.heading}</h3>
        <form
          className="popup__form"
          name={`${props.name}`}
          action="#"
          noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
