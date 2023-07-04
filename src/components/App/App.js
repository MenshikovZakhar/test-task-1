import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from "../Cards/Cards";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://testguru.ru/frontend-test/api/v1/items")
      .then((resp) => {
        console.log(resp.data.items);
        setCards(resp.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className='page'>
      <Cards cards={cards} />

    </div>
  )
}
export default App;
