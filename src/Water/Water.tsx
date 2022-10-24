import React from 'react';
import './Water.css';

function Water(props: {color: string}) {
  const curColor = props.color;
  return (
    <div className={curColor}>
    </div>
  );
}

export default Water;
