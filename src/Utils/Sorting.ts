import { colorSchemeObj, numColors, numWaters } from "./Constants";

export function sortingFunc() {
  const firstArr: Array<number> = [];
  for (let i = 1; i <= numColors; i++) {
    for (let j = 0; j < 4; j++) {
      firstArr.push(i);
    }
  }
  const firstArrLength = firstArr.length;

  const secondArr: Array<number> = [];
  while (secondArr.length !== firstArrLength) {
    const index = Math.round(Math.random() * firstArrLength);
    secondArr.push(firstArr[index])
  }

  const exitArr: Array<Array<number>> = [];
  for (let i = 0; i < secondArr.length; i += numWaters) {
    const chunk = secondArr.slice(i, i + numWaters);
    exitArr.push(chunk);
    // colorSchemeObj.push(chunk);
  }

  console.log('firstArrLength:', firstArrLength, 'firstArr:', firstArr, 'secondArr:',
    secondArr, 'exitArr:', exitArr, 'colorSchemeObj:', colorSchemeObj);
}