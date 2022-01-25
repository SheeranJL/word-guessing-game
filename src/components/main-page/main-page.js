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
      <div className='title-background'>
        <h1 className='title' style={{fontSize: '24px', color: 'white'}}> PHRASE GUESSING GAME</h1>
      </div>

        <GameLetters />

      <div className='keyboard-letters-container'>
        <KeyboardLetters />
      </div>

      <div className='lives-letters-container'>
        <LivesAndTime />
      </div>

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
