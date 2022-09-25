import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit-profile"
      heading="Редактировать профиль"
      submit={onLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          className="popup__input"
          name="name"
          id="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
          required />
        <span className="popup__error name-error"></span>
        <input
          className="popup__input"
          name="about"
          id="description"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
          required />
        <span className="popup__error description-error"></span>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
