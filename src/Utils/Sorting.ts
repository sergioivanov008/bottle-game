export function sortingFunc() {
  const firstArr: Array<number> = [];
  for (let i = 1; i < 13; i++) {//! change for constanta
    for (let j = 0; j < 4; j++) {
      firstArr.push(i);
    }
  }
  const firstArrLength = firstArr.length;


  // const rand: Number[] = [];
  // for (let i = 0; i < firstArrLength; i++) {
  //   const el = Math.round(Math.random() * firstArrLength);
  //   rand.push(el);
  // }

  const secondArr: Array<number> = [];
  while (secondArr.length !== firstArrLength) {
    const index = Math.round(Math.random() * firstArrLength);
    secondArr.push(firstArr[index])
  }

  const exitArr: Array<Array<number>> = [];
  let counter = 0;
  secondArr.forEach(el => {
    if(counter < 3) {
      counter = 0;
      exitArr[exitArr.length].push(el);
    } else {
      counter += 1;
      exitArr[exitArr.length].push(el);
    }

  })

  console.log('firstArrLength:', firstArrLength, 'firstArr:', firstArr, 'secondArr:', secondArr, 'exitArr:', exitArr);
}