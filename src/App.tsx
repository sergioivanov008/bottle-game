import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import AppBody from './AppBody/AppBody';
import { sortingFunc } from './Utils/Sorting';

export const colorSchemeObj: number[][] = localStorage.colorSchemeObj
  ? localStorage.colorSchemeObj
  : sortingFunc();

function App() {
  console.log('App render');

  // console.log('curGameArr:', colorSchemeObj);
  const [colorScheme, setColorScheme] = useState(colorSchemeObj);
  // const [colorOne, setColorOne] = useState(0);
  // const [colorTwo, setColorTwo] = useState(0);
  let bottleOne: null | number = null;
  let bottleTwo: null | number = null;
  const clearBottles = (): void => {
    bottleOne = null;
    bottleTwo = null;
  }

  const changeBottle = (id: number) => {
    console.log(`clicked by bottle # ${id}`);
    if(bottleOne === null) {
      bottleOne = id;
    } else {
      if(id === bottleOne) {
        clearBottles();
      } else {
        bottleTwo = id;
      }
    }

    if(bottleOne !== null && bottleTwo !== null) {
      clearBottles();
      console.log('start gaming');
    }

    console.log('bottleOne, bottleTwo: ', bottleOne, bottleTwo);
  }

  return (
    <div className="App">
      <AppHeader/>
      <AppBody colorScheme = {colorScheme} changeBottle={changeBottle}/>
    </div>
  );
}

export default App;
