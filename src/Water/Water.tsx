import React from 'react';
import { emptyWater } from '../Utils/Constants';
import { WaterType } from '../Utils/Types';
import './Water.css';

function Water(props: WaterType) {
  const {colorNumber} = props;
  const curStyle = emptyWater + ` color${colorNumber}`;
  return (
    <div className={curStyle}>
    </div>
  );
}

export default Water;
