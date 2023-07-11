import React from 'react';
import './Card.css';
function Cards({ card, onCardLike }) {

    //определяем, наличие у карточки лайка

    //переменная в `className` для кнопки лайк

    function handleLikeClick() {
        onCardLike(card);
    }
    return (
        <li className="elements__card">
            <img className="elements__image" src={card.link} alt={card.name} />
            <div className="elements__description">
                <h2 className="elements__title">{card.title}</h2>
                <p className="element__like-counter">{card.price}</p>
                <div className="element__like_ui">
                    <button type="button" class="elements__like false" aria-label="Нравиться" onClick={handleLikeClick}></button>
                </div>
            </div>
        </li>

    );
}

export default Cards;