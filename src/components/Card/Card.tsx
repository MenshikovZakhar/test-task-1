import axios from "axios";
import './Card.css';
import * as React from 'react';
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel/lib/js'


function Card({ card, onCardLike, loading }) {
    const [loadings, setLoadings] = useState(false);
    const [images, setImages] = useState();


    useEffect(() => {
        setLoadings(false);
        axios.get('https://random.dog/woof.json')
            .then(
                (resp) => {
                    setImages(resp.data.url);
                    console.log(resp.data.url);
                })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoadings(true)
            })
    }, []);

    function handleCardLike() {
        onCardLike(card.id, !card.isLiked);
    }

    return (
        <div>
            {!loadings && !loading ? <Skeleton /> :
                <li className="elements__card">

                    <Carousel infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className="elements__image" src={images} alt={card.name} />
                        </div>

                    </Carousel>

                    <div className="elements__description">
                        <h2 className="elements__title">{card.title}</h2>
                        <p className="element__like-counter">{card.price}</p>
                        <div className="element__like_ui">
                            <button type="button" className={card?.isLiked ? 'elements__like elements__like_active' : 'elements__like'}
                                aria-label="Нравиться" onClick={handleCardLike} ></button>
                        </div>
                    </div>
                </li>
            }
        </div>
    );
}

export default Card;