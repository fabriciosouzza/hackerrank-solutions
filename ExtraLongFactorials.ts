// main();

function extraLongFactorials(n: number): void {
  let sum = 1n;
  for (let i = 1n; i < n + 1; i++) {
    sum *= i;
  }
  
  console.log(String(sum))
}

extraLongFactorials(100);

// function main() {
// 	const value: number = 5;

// 	const result: string = extraLongFactorials(value);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };