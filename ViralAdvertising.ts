// main();

function viralAdvertising(n: number): number {
  let cumulative = 2;
  let shared = 5;
  let liked = 2;
  
  for (let i = 2; i < n + 1; i++) {
    shared = Math.floor(shared/2) * 3;
    liked = Math.floor(shared/2);
    cumulative += liked;
  }

  return cumulative;
}

// function main() {
// 	const numberOfDays: number = 5;

// 	const result: number = viralAdvertising(numberOfDays);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };