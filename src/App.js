import React from "react";

import avatar from './images/avatar.jpg';

function App() {
  return (
    <div>
      <div className="page">
        <header className="header">
          <div className="header__logo"></div>
        </header>
        <main className="content">
          <section className="profile">
            <img className="profile__avatar" src={avatar} alt="Изображение профиля" />
            <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать аватар"></button>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__description">Исследователь океана</p>
              <button className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить новую карточку"></button>
          </section>

          <section className="elements">
            <ul className="elements__cards"></ul>
          </section>

        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_edit-profile">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <h3 className="popup__heading">Редактировать профиль</h3>
            <form className="popup__form" name="edit-form">
              <fieldset className="popup__fieldset">
                <input className="popup__input" name="name" id="name" type="text" placeholder="Имя" minlength="2" maxlength="40"
                  required />
                <span className="popup__error name-error"></span>
                <input className="popup__input" name="about" id="description" type="text" placeholder="О себе" minlength="2"
                  maxlength="200" required />
                <span className="popup__error description-error"></span>
                <button className="popup__submit-button" type="submit" aria-label="Сохранить">
                  Сохранить
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_type_new-element">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__heading">Новое место</h2>
            <form className="popup__form" name="add-form">
              <input className="popup__input" name="name" type="text" id="title" placeholder="Название" minlength="2"
                maxlength="30" required />
              <span className="popup__error title-error"></span>
              <input className="popup__input" name="link" id="link" type="url" placeholder="Ссылка на картинку" required />
              <span className="popup__error link-error"></span>
              <button className="popup__submit-button" type="submit" aria-label="Создать">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_view-image">
          <div className="popup__image-container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <figure className="popup__figure">
              <img className="popup__image" />
              <figcaption className="popup__figcaption"></figcaption>
            </figure>
          </div>
        </div>

        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__heading">Вы уверены?</h2>
            <form className="popup__form" name="confirm-form">
              <button className="popup__submit-button" type="submit" aria-label="Да">Да</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__heading">Обновить аватар</h2>
            <form className="popup__form" name="avatar-form">
              <input className="popup__input" name="avatar" type="url" id="avatar-link" placeholder="Ссылка на картинку" required />
              <span className="popup__error avatar-link-error"></span>
              <button className="popup__submit-button" type="submit" aria-label="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>

        <template className="element-template">
          <li className="element">
            <img className="element__image" />
            <button className="element__trash-button" type="button" aria-label="Удалить"></button>
            <div className="element__info">
              <h2 className="element__heading"></h2>
              <div className="element__like">
                <button className="element__like-button" type="button" aria-label="Лайк"></button>
                <p className="element__like-count">0</p>
              </div>
            </div>
          </li>
        </template>

      </div>
    </div>
  );
}

export default App;
