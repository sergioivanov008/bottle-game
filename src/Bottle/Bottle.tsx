import React from 'react';
import { BottleType } from '../Utils/Types';
import Water from '../Water/Water';
import './Bottle.css';

function Bottle(props: BottleType) {

  const {id, sсheme, changeBottle} = props;

  const clickCurBottle = () => {
    changeBottle(id);
  }

  return (
    <div className="Bottle" onClick={clickCurBottle} key={id}>
      {sсheme.map((el, i) => (
          <Water colorNumber={el} key={i}/>
        ))
      }
    </div>
  );
}

export default Bottle;
