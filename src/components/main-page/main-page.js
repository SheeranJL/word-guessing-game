import './main-page.scss';
import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';

//components//
import GameLetters from '../game-letters/game-letters.js';
import KeyboardLetters from '../keyboard-letters/keyboard-letters.js';
import LivesAndTime from '../lives-and-time/lives-and-time.js';
import Modal from '../modal/modal.js';


const MainPage = () => {

  const {data: {gameOver, gameWin}} = useContext(appContext);

  return (
    <div className='main-page'>
      <h1 className='title'> WORD GUESSING GAME</h1>
      <GameLetters />
      <KeyboardLetters />
      <LivesAndTime />
      {
        gameOver ? <Modal message='YOU LOSE!' /> : null
      }
      {
        gameWin ? <Modal message='YOU WIN!' /> : null
      }
    </div>
  )
}

export default MainPage;
