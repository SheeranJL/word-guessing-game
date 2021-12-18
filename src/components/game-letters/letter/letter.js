import React, {useContext} from 'react';
import {appContext} from '../../../context/context.js';
import './letter.scss';

const GameLetter = ({letter, space}) => {

  const {data} = useContext(appContext);

  console.log(letter, space);


  return (
    <li className={ data.correctKeys.includes(letter) ? 'game-letter show' : 'game-letter'}>
    {letter}
    </li>
  )
};

export default GameLetter;
