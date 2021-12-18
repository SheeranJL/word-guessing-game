import React, {useContext} from 'react';
import {appContext} from '../../context/context.js'
import './modal.scss';

const Modal = () => {

  const {data, actions} = useContext(appContext)

  const resetGame = () => {
    actions.setGameOver(false);
  }

  return (
    <div className='modal-container'>
      <h3>You Lose!</h3>
      <span>Time remaining: 00:10</span>
      <button onClick={resetGame}>Play again</button>
    </div>
  )
}

export default Modal;
