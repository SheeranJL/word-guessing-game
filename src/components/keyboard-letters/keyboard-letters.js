import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './keyboard-letters.scss';
import keys from '../../keys/keys.js';

//component//
import EachKey from './each-key-letter/each-key.js';

const KeyboardLetters = () => {

  const {data} = useContext(appContext);

  return (
    <div className='keyboard-letter-container'>

      <div className='keyrow'>
        {keys[0].map((key, index) => <EachKey key={index} letterKey={key} />)}
      </div>

      <div className='keyrow'>
        {keys[1].map((key, index) => <EachKey key={index} letterKey={key} />)}
      </div>

      <div className='keyrow'>
        {keys[2].map((key, index) => <EachKey key={index} letterKey={key} />)}
      </div>

    </div>
  )

}

export default KeyboardLetters;
