import { useEffect, useState } from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/api";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
    cohort: ""
  });

  useEffect(() => {
    api.getUserInfo()
      .then(data => { setCurrentUser(data) })
      .catch(err => { console.log(err) })
  }, []);

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

  const handleUpdateUser = (newUserInfo) => {
    api.setUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
