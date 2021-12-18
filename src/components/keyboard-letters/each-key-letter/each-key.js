import './each-key.scss';
import React from 'react';

const EachKey = ({letterKey}) => {

  const handleClick = (e) => {
    console.log(e.target.innerHTML)
  }

  return (
    <button onClick={handleClick} className='key'>{letterKey}</button>
  )
}

export default EachKey;
