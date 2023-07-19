import axios from "axios";
import './Card.css';
import React, { useEffect, useState } from "react";
function Card({ card, index }) {
    const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem('isLiked')) || false);
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




    const handleCardLike = (index) => {

        let isLiked = {
            id: index,
            isliked: false
        };
        localStorage.setItem('isLiked', JSON.stringify(isLiked));
        setIsLiked(isLiked.isliked);

    };


    //определяем, наличие у карточки лайка

    //переменная в `className` для кнопки лайк
    const cardLikeButtonClassName = `elements__like ${isLiked.isliked && 'elements__like_active'}`



    return (
        <li className="elements__card">
            <img className="elements__image" src={images} alt={card.name} />

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