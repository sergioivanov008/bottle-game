import { numAllWaters, numColors, numWaters } from "./Constants";

export function sortingFunc() {
  const firstArr: Array<number> = [];
  for (let i = 1; i <= numColors; i++) {
    for (let j = 0; j < numWaters; j++) {
      firstArr.push(i);
    }
  }

  const secondArr: Array<number> = [];
  while (secondArr.length !== numAllWaters) {
    const firstArrLength = firstArr.length;
    const index = Math.floor(Math.random() * firstArrLength);
    if(index !== undefined) {
      secondArr.push(firstArr[index]);
      firstArr.splice(index, 1);
    }
  }

  const exitArr: Array<Array<number | null>> = [];
  for (let i = 0; i < secondArr.length; i += numWaters) {
    const chunk = secondArr.slice(i, i + numWaters);
    exitArr.push(chunk);
  }

  exitArr.push([]);
  exitArr.push([]);
  
  return exitArr;
}