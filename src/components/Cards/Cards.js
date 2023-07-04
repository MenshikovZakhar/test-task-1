import Card from "../Card/Card";
import React from 'react';



function Cards({ cards }) {

    return (
        <main className="content">
            <section className="elements">
                <ul className="elements__list">
                    {cards
                        ? Array.from(cards).map((card) => {
                            return (<Card card={card}
                                key={card.id}

                            />)
                        })
                        : null}
                </ul>
            </section>
        </main>
    );
}

export default Cards;