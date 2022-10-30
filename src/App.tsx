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

  const [colorScheme, setColorScheme] = useState(colorSchemeObj);

  console.log('colorScheme: ', colorScheme);

  let bottleOne: null | number = null;
  let bottleTwo: null | number = null;

  const clearBottles = (): void => {
    bottleOne = null;
    bottleTwo = null;
  }

  const gameLogic = (one: number, two: number): void => {
    console.log('start gameLogic with ', one, 'and ', two);
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
      gameLogic(bottleOne, bottleTwo);
      clearBottles();
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
