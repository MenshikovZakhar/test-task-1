
import './Card.css';
import React, { useEffect, useState } from "react";
function Card({ card, index }) {

    const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem('isLiked')) || false);


    useEffect(() => {
        window.localStorage.setItem('isLiked', JSON.stringify(isLiked));


    }, [isLiked]);


    const handleCardLike = () => {
        setIsLiked(!isLiked);

    };
    //определяем, наличие у карточки лайка

    //переменная в `className` для кнопки лайк
    const cardLikeButtonClassName = `elements__like ${isLiked && 'elements__like_active'}`



    return (
        <li className="elements__card">
            <img className="elements__image" src={card.link} alt={card.name} />
            <div className="elements__description">
                <h2 className="elements__title">{card.title}</h2>
                <p className="element__like-counter">{card.price}</p>
                <div className="element__like_ui">
                    <button type="button" className={cardLikeButtonClassName} aria-label="Нравиться" onClick={handleCardLike}></button>
                </div>
            </div>
        </li>

    );
}

export default Card;