import React from 'react';
import { BottleType } from '../Utils/Types';
import Water from '../Water/Water';
import './Bottle.css';

function Bottle(props: BottleType) {
  console.log('props:', props);
  const clickCurBottle = () => {
    console.log('click');
  }
  return (
    <div className="Bottle" onClick={clickCurBottle}>
      {/* <Water color="Water1"/>
      <Water color="Water2"/>
      <Water color="Water3"/>
      <Water color="Water4"/> */}
    </div>
  );
}

export default Bottle;
