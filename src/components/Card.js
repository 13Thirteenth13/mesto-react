import React from "react";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="element" key={card._id}>
      <img className="element__image" src={card.link} onClick={handleClick} alt={card.name} />
      <button className="element__trash-button" type="button" aria-label="Удалить"></button>
      <div className="element__info">
        <h2 className="element__heading">{card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" type="button" aria-label="Лайк"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
