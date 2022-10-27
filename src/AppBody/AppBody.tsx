import React from 'react';
import Bottle from '../Bottle/Bottle';
import { AppBodyType } from '../Utils/Types';
import './AppBody.css';

function AppBody(props: AppBodyType) {
  // console.log('props.colorScheme:', props.colorScheme)

  // const colorSheme = props.colorScheme;
  const {colorScheme, changeBottle} = props;
  // const changeBottle = props.changeBottle;

  return (
    <div className="AppBody">
      {colorScheme.map((el, i) => (
        <Bottle sheme={el} id={i} key={i}/>
      ))}
    </div>
  );
}

export default AppBody;
