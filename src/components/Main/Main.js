import React from 'react';
import Card from "../Card";

export default function Main({ cards, }) {
    <main className="content">
        <section className="elements">
            <ul className="elements__list">
                {cards
                    ? Array.from(cards).map((card) => {
                        return (<Card card={card}
                            key={card._id}

                        />)
                    })
                    : null}
            </ul>
        </section>
    </main>
}
