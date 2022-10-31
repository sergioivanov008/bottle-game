import React, { useRef } from 'react';
import { BottleType } from '../Utils/Types';
import Water from '../Water/Water';
import './Bottle.css';

function Bottle(props: BottleType) {

  const {id, sсheme, changeBottle} = props;
  const reverseArr = sсheme.slice(0).reverse();

  const ref = useRef<HTMLDivElement | null>(null);

  const clickCurBottle = () => {
    changeBottle(id);
    // const element = ref?.current?.getBoundingClientRect();
    // console.log('element: ', element);
  }

  return (
    <div className="Bottle" onClick={clickCurBottle} key={id} ref={ref}>
      {reverseArr.map((el, i) => (
          <Water colorNumber={el} key={i}/>
        ))
      }
    </div>
  );
}

export default Bottle;
