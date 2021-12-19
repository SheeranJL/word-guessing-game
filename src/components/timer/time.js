import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './time.scss';

const Time = () => {

  const {data: {timer}} = useContext(appContext);

  return (
    <div className='timer'>
      <h3 className='heading'>REMAINING TIME</h3>
      <span className='time'>{timer}</span>
    </div>
  )


}

export default Time;
