import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './lives-and-time.scss';

import Lives from '../lives/lives.js'
import Time from '../timer/time.js'

const LivesAndTime = () => {

  return (
    <div className='lives-time-container'>
      <Lives />
      <Time />
    </div>



  )

}

export default LivesAndTime;
