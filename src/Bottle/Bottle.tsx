import React from 'react';
import Water from '../Water/Water';
import './Bottle.css';

function Bottle() {
  const clickCurBottle = () => {
    console.log('click');
  }
  return (
    <div className="Bottle" onClick={clickCurBottle}>
      <Water color="Water1"/>
      <Water color="Water2"/>
      <Water color="Water3"/>
      <Water color="Water4"/>
    </div>
  );
}

export default Bottle;
