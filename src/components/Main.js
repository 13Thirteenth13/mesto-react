import React from "react";

import avatar from '../images/avatar.jpg';

function Main() {
  return (
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
  );
}

export default Main;
