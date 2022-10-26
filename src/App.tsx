import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import AppBody from './AppBody/AppBody';
import { sortingFunc } from './Utils/Sorting';

export const colorSchemeObj: number[][] = localStorage.colorSchemeObj
  ? localStorage.colorSchemeObj
  : sortingFunc();

// console.log('+++');

function App() {
  console.log('App');
  // const curGameArr = sortingFunc();

  console.log('curGameArr:', colorSchemeObj);
  const [colorScheme, setColorScheme] = useState(colorSchemeObj)

  return (
    <div className="App">
      <AppHeader/>
      <AppBody colorScheme = {colorScheme} />
    </div>
  );
}

export default App;
