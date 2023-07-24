import axios from "axios";
import './Card.css';
import React, { useEffect, useState } from "react";
function Card({ card, onCardLike }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://random.dog/woof.json')
            .then(
                (resp) => {
                    setImages(resp.data.url);
                    console.log(resp.data.url);
                })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleCardLike() {
        onCardLike(card.id, !card.isLiked);
    }




    return (
        <li className="elements__card">
            <img className="elements__image" src={images} alt={card.name} />

            <div className="elements__description">
                <h2 className="elements__title">{card.title}</h2>
                <p className="element__like-counter">{card.price}</p>
                <div className="element__like_ui">
                    <button type="button" className={card?.isLiked ? 'elements__like elements__like_active' : 'elements__like'}
                        aria-label="Нравиться" card={card} onClick={handleCardLike} ></button>
                </div>
            </div>
        </li>

    );
}

export default Card;