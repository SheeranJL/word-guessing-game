import './each-key.scss';
import React, {useContext} from 'react';
import {appContext} from '../../../context/context.js';

const EachKey = ({letterKey}) => {

  const {actions, data} = useContext(appContext);

  const handleClick = (e) => {
    actions.checkGuess(e.target.innerHTML)
  }


  return (
    <button onClick={handleClick} className={ data.selectedKey.includes(letterKey) ? 'key chosen' : 'key' }>{letterKey}</button>
  )
}

export default EachKey;
