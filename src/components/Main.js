import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Изображение профиля" />
        <button className="profile__edit-avatar-button" type="button" onClick={onEditAvatar} aria-label="Редактировать аватар">
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} aria-label="Редактировать профиль">
          </button>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} aria-label="Добавить новую карточку">
        </button>
      </section>

      <section className="elements">
        <ul className="elements__cards">
          {cards.map((card) => {
            return (
             <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })};
        </ul>
      </section>

    </main>
  );
}

export default Main;
