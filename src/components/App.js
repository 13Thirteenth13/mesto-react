import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = card => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="edit-profile"
          heading="Редактировать профиль"
          submit="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <input className="popup__input" name="name" id="name" type="text" placeholder="Имя" minLength="2" maxLength="40"
              required />
            <span className="popup__error name-error"></span>
            <input className="popup__input" name="about" id="description" type="text" placeholder="О себе" minLength="2"
              maxLength="200" required />
            <span className="popup__error description-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="new-element"
          heading="Новое место"
          submit="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <input className="popup__input" name="name" type="text" id="title" placeholder="Название" minLength="2"
              maxLength="30" required />
            <span className="popup__error title-error"></span>
            <input className="popup__input" name="link" id="link" type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__error link-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          heading="Обновить аватар"
          submit="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <input className="popup__input" name="avatar" type="url" id="avatar-link" placeholder="Ссылка на картинку" required />
            <span className="popup__error avatar-link-error"></span>
          </>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__heading">Вы уверены?</h2>
            <form className="popup__form" name="confirm-form">
              <button className="popup__submit-button" type="submit" aria-label="Да">Да</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
