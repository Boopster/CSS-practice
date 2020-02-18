import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [buttonClass, setButtonClass] = useState("button-hidden");

  const toggleButtonClass = () => {
    const startTimer = setTimeout(() => setButtonClass("button fade-in"), 2000);
  }

  useEffect(() => {
    toggleButtonClass();
  }, []);

  return (
    <>
      <h1 className="title">DinoPark&trade;</h1>
      <button className={buttonClass}>Play Game</button>
    </>
  );
};

export default App;
