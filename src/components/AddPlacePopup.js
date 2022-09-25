import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (evt) => {
    setImage(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddPlace({
      name: description,
      link: image
    });
  };

  return (
    <PopupWithForm
      name="new-element"
      heading="Новое место"
      submit={onLoading ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          className="popup__input"
          name="name"
          type="text"
          id="title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleDescriptionChange}
          value={description}
          required />
        <span className="popup__error title-error"></span>
        <input
          className="popup__input"
          name="link"
          id="link"
          type="url"
          placeholder="Ссылка на картинку"
          onChange={handleImageChange}
          value={image}
          required />
        <span className="popup__error link-error"></span>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
