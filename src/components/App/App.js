import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://testguru.ru/frontend-test/api/v1/items")
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main cards={cards} />} />
      </Routes>
    </div>
  )
}
export default App;
