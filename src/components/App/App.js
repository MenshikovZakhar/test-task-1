import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from "../Cards/Cards";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from 'react';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState();

  const handleCardLike = (id, bron) => {
    setCards(
      cards.map((it) => {
        if (it.id === id) it.isLiked = bron;
        return it;
      })
    );
    localStorage.setItem('cards', JSON.stringify(cards));
    console.log(cards)
  };

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')));
  }, []);


  useEffect(() => {
    setLoading(false);
    if (localStorage.getItem("cards") !== null) {
      setCards(JSON.parse(localStorage.getItem('cards')));
    } else {

      Promise.all([
        axios.get('https://testguru.ru/frontend-test/api/v1/items?page=1'),
        axios.get('https://testguru.ru/frontend-test/api/v1/items?page=2'),
      ]).then(resp => {
        const array = resp[0].data.items.concat(resp[1].data.items);
        setCards(array);
        console.log(resp)
      })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(true)
        })
    }
  }, []);

  let ref = useRef(2);
  function handleClick() {
    ref.current = ref.current + 1
    axios.get('https://testguru.ru/frontend-test/api/v1/items?page=' + ref.current)
      .then((data) => {

        console.log(data.data.items);
        setCards([...cards, ...data.data.items]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='page'>
      <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
      <Cards cards={cards} loading={loading} onCardLike={handleCardLike} />

      {
        ref.current < 10 ?
          <button type="submit" onClick={handleClick} >Ещё</button>
          : null
      }

    </div>

  )
}
export default App;
