import Card from "../Card/Card";
import * as React from 'react';



function Cards({ cards, onCardLike, loading }) {

    return (
        <main className="content">
            <section className="elements">
                <ul className="elements__list" >

                    {cards
                        ? Array.from(cards).map((card, index) => {
                            return (<Card card={card}
                                key={index}
                                onCardLike={onCardLike}
                                loading={loading}

                            />)
                        })
                        : null}
                </ul>
            </section>
        </main>
    );
}

export default Cards;