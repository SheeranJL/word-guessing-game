import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './lives.scss';

const Lives = () => {

  const {data:{incorrectCount}} = useContext(appContext);

  return (

    <div className='lives'>

      <div>
        <h3 className='heading'>LIVES</h3>
      </div>

      <div>
        <span className={incorrectCount >= 1 ? 'lost-heart' : 'heart'}>&#10084;</span>
        <span className={incorrectCount >= 2 ? 'lost-heart' : 'heart'}>&#10084;</span>
        <span className={incorrectCount >= 3 ? 'lost-heart' : 'heart'}>&#10084;</span>
      </div>

    </div>
  )
}

export default Lives;
