import React from 'react';
import Bottle from '../Bottle/Bottle';
import { sortingFunc } from '../Utils/Sorting';
import './AppBody.css';

function AppBody() {
  sortingFunc();
  
  return (
    <div className="AppBody">
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
      <Bottle/>
    </div>
  );
}

export default AppBody;
