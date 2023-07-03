import React from 'react';

function Card({ card }) {

    return (
        <li className="elements__card">
            <div className="elements__description">
                <h2 className="elements__title">{card.title}</h2>
                <div className="element__like_ui">
                    <p className="element__like-counter">{card.price}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;