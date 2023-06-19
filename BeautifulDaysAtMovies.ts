// main();

function beautifulDays(i: number, j: number, k: number): number {
  const arrOfBeatifulDays: number[] = []

  for (let h = i; h < j + 1; h++) {
    let reversedNumber = Number(h.toString().split("").reverse().join(""));
    let valueToAnalyze = Math.abs(h - reversedNumber) / k;
    
    Number.isInteger(valueToAnalyze) ? arrOfBeatifulDays.push(valueToAnalyze) : false;
  }

  return arrOfBeatifulDays.length;
}

// function main() {
// 	const startingDayNumber: number = 13;
// 	const endingDayNumber: number = 45;
// 	const divisor: number = 3;

// 	const result: number = beautifulDays(startingDayNumber, endingDayNumber, divisor);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };
