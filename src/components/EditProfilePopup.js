import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit-profile"
      heading="Редактировать профиль"
      submit="Сохранить"
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
