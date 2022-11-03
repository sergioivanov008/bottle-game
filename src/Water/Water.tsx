import React from 'react';
import { emptyWater } from '../Utils/Constants';
import { WaterType } from '../Utils/Types';
import './Water.css';

function Water(props: WaterType) {
  let curStyle = emptyWater + ` color${props.colorNumber}`;

  // const changeStyle = () => {
  //   curStyle += ' animationStyle';
  // }

  return (
    <div className={curStyle} /*onClick={changeStyle}*/>
    </div>
  );
}

export default Water;
