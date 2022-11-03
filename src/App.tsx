import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import AppBody from './AppBody/AppBody';
import { sortingFunc } from './Utils/Sorting';

export const colorSchemeObj: (number | null)[][] = localStorage.colorSchemeObj
  ? localStorage.colorSchemeObj
  : sortingFunc();

function App() {
  console.log('App render');

  const [colorScheme, setColorScheme] = useState(colorSchemeObj);

  // console.log('App colorScheme: ', colorScheme);

  let bottleOne: null | number = null;
  let bottleTwo: null | number = null;

  const clearBottles = (): void => {
    bottleOne = null;
    bottleTwo = null;
  }

  const gameLogic = (one: number, two: number): void => {
    // console.log('-gameLogic- start gameLogic with bottle number', one, 'and bottle number ', two);
    // console.log('-gameLogic- color number ', colorScheme[one], ' and color number ', colorScheme[two]);
    const tempColorScheme: (number | null)[][] = colorScheme.slice(0);
    
    const curColorOne = tempColorScheme[one][colorScheme[one].length - 1];
    const curColorTwo = tempColorScheme[two][colorScheme[two].length - 1];

    if(colorScheme[two].length < 4) {//! change constanta!
      if(colorScheme[two].length === 0) {//! change constanta!
        tempColorScheme[two].push(curColorOne);
        tempColorScheme[one].pop();
      } else if(curColorOne === curColorTwo) {
        tempColorScheme[two].push(curColorOne);
        tempColorScheme[one].pop();
      }
    }

    setColorScheme(tempColorScheme);
  }

  const changeBottle = (id: number) => {
    // console.log(`-changeBottle- clicked by bottle # ${id}`);
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
      gameLogic(bottleOne, bottleTwo);
      clearBottles();
    }

    // console.log('-changeBottle- bottleOne, bottleTwo: ', bottleOne, bottleTwo);
  }

  return (
    <div className="App">
      <AppHeader/>
      <AppBody colorScheme = {colorScheme} changeBottle={changeBottle}/>
    </div>
  );
}

export default App;
