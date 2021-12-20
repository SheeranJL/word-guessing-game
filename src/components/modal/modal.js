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
    <div className='modal-overlay'>
      <div className={message === 'YOU LOSE!' ? 'modal-container lose' : 'modal-container win'}>
        {message === 'YOU LOSE!' ? <span className='face'>&#9785;</span> : <span className='face'>&#9786;</span>}
        <h3 className='modal-message'>{message}</h3>
        <button className='modal-button' onClick={resetGame}>Play again</button>
      </div>
    </div>
  )
}

export default Modal;
