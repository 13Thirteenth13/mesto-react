import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.toggleLikeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };

  const handleCardDelete = (cardId) => {
    api.deleteCard(cardId)
      .then(() => {
        setCards((cards) => cards.filter(card => card._id !== cardId));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={avatar} alt="Изображение профиля" />
        <button className="profile__edit-avatar-button" type="button" onClick={onEditAvatar} aria-label="Редактировать аватар">
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__description">{about}</p>
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
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>

    </main>
  );
}

export default Main;
