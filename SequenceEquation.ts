// main();

function permutationEquation(p: number[]): number[] {
  const y: number[] = [];

  for (let i = 1; i < p.length + 1; i++) {
    for (let j = 0; j < p.length; j++) {
      if (i == p[j]) {
        for (let k = 0; k < p.length; k++) {
          let inFunc = p[k] - 1
          inFunc  == j ? y.push(k + 1) : false
        }
      }
    }
  }

  //This is a smaller version, using bult-in js methods
  //
  // for (let i = 1; i < p.length + 1; i++) {
  //   y.push(p.findIndex(key => key - 1 == p.findIndex(item => item == i)) as number + 1)
  // }

  return y;
}


// function main() {
//   const inputP: number[] = [2, 3, 1];

//   const result: number[] = permutationEquation(inputP); 


//   console.log("\nOutput:\n\n", result);
//   console.log("\n- - -");
// };