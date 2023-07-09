import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from "../Cards/Cards";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('https://testguru.ru/frontend-test/api/v1/items?page=1'),
      axios.get('https://testguru.ru/frontend-test/api/v1/items?page=2')
    ]).then(resp => {
      const array = resp[0].data.items.concat(resp[1].data.items);
      setCards(array);
    })
      .catch((error) => {
        console.log(error);
      });
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
      <Cards cards={cards} />
      <button type="submit" onClick={handleClick} >Ещё</button>
    </div>
  )
}
export default App;
