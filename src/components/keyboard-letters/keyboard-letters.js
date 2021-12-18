import React from 'react';
import './keyboard-letters.scss';
import keys from '../../keys/keys.js';

//component//
import EachKey from './each-key-letter/each-key.js';

const KeyboardLetters = () => {

  console.log(keys[0]);

  return (
    <div className='keyboard-letter-container'>

      <div className='keyrow'>
        {keys[0].map((key, index) => <EachKey letterKey={key} />)}
      </div>

      <div className='keyrow'>
        {keys[1].map((key, index) => <EachKey letterKey={key} />)}
      </div>

      <div className='keyrow'>
        {keys[2].map((key, index) => <EachKey letterKey={key} />)}
      </div>

    </div>
  )

}

export default KeyboardLetters;
