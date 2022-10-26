import React from 'react';
import { colorSchemeObj } from '../App';
import { BottleType } from '../Utils/Types';
import Water from '../Water/Water';
import './Bottle.css';

function Bottle(props: BottleType) {
  // console.log('props:', props);

  const {id, sheme} = props;

  const clickCurBottle = () => {
    console.log('click on bottle id:', id);
    colorSchemeObj[id].pop();
    console.log('colorSchemeObj:', colorSchemeObj[id])
  }

  return (
    <div className="Bottle" onClick={clickCurBottle} key={id}>
      {sheme.map((el, i) => (
          <Water colorNumber={el} key={i}/>
        ))
      }
    </div>
  );
}

export default Bottle;
