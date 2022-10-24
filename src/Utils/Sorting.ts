export function sortingFunc() {
  const firstArr: Array<number> = [];
  for (let i = 1; i < 13; i++) {//! change for constanta
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
  for (let i = 0; i < secondArr.length; i += 4) {//! change for constanta
    const chunk = secondArr.slice(i, i + 4);//! change for constanta
    exitArr.push(chunk);
  }

  console.log('firstArrLength:', firstArrLength, 'firstArr:', firstArr, 'secondArr:',
    secondArr, 'exitArr:', exitArr, 'exitArr.length:', exitArr.length);
}