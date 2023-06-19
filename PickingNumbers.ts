main();

function pickingNumbers(a: number[]): number {
	let valueToReturn = 0; 

  for (let i = 0; i < a.length; i++) {
    let subArr: number[] = [a[i]];
    for (let j = 0; j < a.length; j++) {
      if (subArr.every(elem => Math.abs(elem - a[j]) <= 1))  {
        subArr.push(a[j])
      };
    };
    if (subArr.length > valueToReturn) {
      valueToReturn = subArr.length;
    };
  };

	return valueToReturn - 1;
};

function main() {
  const inputMatrixOne: number[] = [1, 2, 2, 3, 1, 2];
  const inputMatrixTwo: number[] = [4, 6, 5, 3, 3, 1];
  const inputMatrixThree: number[] = [4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97];

  const resultOne: number = pickingNumbers(inputMatrixOne); //expected 5
  const resultTwo: number = pickingNumbers(inputMatrixTwo); //expected 3
  const resultThree: number = pickingNumbers(inputMatrixThree); //expected 50

  console.log("\nOutput:\n\n", resultOne);
  console.log("\n- - -");

	console.log("\nOutput:\n\n", resultTwo);
  console.log("\n- - -");

	console.log("\nOutput:\n\n", resultThree);
  console.log("\n- - -");
};