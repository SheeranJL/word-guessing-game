import React, {useContext} from 'react';
import {appContext} from '../../context/context.js'
import './modal.scss';

const Modal = ({message}) => {

  const {data, actions} = useContext(appContext)

  const resetGame = () => {
    if (message === 'YOU LOSE!') {
      actions.setGameOver(false);
    } else {
      actions.setGameWin(false);
    }
  }

  return (
    <>
    <div className={message === 'YOU LOSE!' ? 'modal-container lose' : 'modal-container win'}>
      <h3 className='modal-message'>{message}</h3>
      <button className='modal-button' onClick={resetGame}>Play again</button>
    </div>
    </>
  )
}

export default Modal;
