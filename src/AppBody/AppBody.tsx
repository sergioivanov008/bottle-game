import React from 'react';
import Bottle from '../Bottle/Bottle';
import './AppBody.css';

function AppBody(props: {colorScheme: number[][]}) {
  console.log('props.colorScheme:', props.colorScheme)

  const colorSheme = props.colorScheme;

  return (
    <div className="AppBody">
      {colorSheme.map((el, i) => (
        <Bottle sheme={el} id={i}/>
      ))}
    </div>
  );
}

export default AppBody;
