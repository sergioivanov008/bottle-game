import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import AppBody from './AppBody/AppBody';
import { sortingFunc } from './Utils/Sorting';

export const colorSchemeObj: number[][] = localStorage.colorSchemeObj
  ? localStorage.colorSchemeObj
  : sortingFunc();

function App() {
  console.log('App');

  console.log('curGameArr:', colorSchemeObj);
  const [colorScheme, setColorScheme] = useState(colorSchemeObj);

  const changeBottle = (id: number) => {
    console.log(`clicked by bottle # ${id}`)
  }

  return (
    <div className="App">
      <AppHeader/>
      <AppBody colorScheme = {colorScheme} changeBottle={changeBottle}/>
    </div>
  );
}

export default App;
