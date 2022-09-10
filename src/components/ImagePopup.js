import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_view-image">
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <figure className="popup__figure">
          <img className="popup__image" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
