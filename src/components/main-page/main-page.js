import './main-page.scss';
import React from 'react';

//components//
import GameLetters from '../game-letters/game-letters.js';
import KeyboardLetters from '../keyboard-letters/keyboard-letters.js';


const MainPage = () => {

  return (
    <div className='main-page'>
      <h1 className='title'> WORD GUESSING GAME</h1>
      <GameLetters />
      <KeyboardLetters />
    </div>
  )
}

export default MainPage;
