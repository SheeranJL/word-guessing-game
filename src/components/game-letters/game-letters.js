import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './game-letters.scss';

import GameLetter from './letter/letter.js';
import Space from './letter/space.js'

const GameLetters = () => {

  const {data} = useContext(appContext);


  return (

    <ul className='game-letters-container'>
      {
        data.gameKey.map((letter, index) => {
          if (letter === ' ') {
            return (
              <Space />
            )
          } else {
            return (
              <GameLetter letter={letter}/>
            )
          }
        })
      }
    </ul>
  )
}

export default GameLetters;
