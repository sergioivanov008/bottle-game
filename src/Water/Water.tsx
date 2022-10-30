import React, { useState } from 'react';
import { emptyWater } from '../Utils/Constants';
import { WaterType } from '../Utils/Types';
import './Water.css';

function Water(props: WaterType) {
  const {colorNumber} = props;
  let [curStyle, setCurStyle] = useState(emptyWater + ` color${colorNumber}`);

  const changeStyle = () => {
    setCurStyle(curStyle += ' animationStyle')
  }

  return (
    <div className={curStyle} /*onClick={changeStyle}*/>
    </div>
  );
}

export default Water;
