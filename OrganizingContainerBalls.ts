// main();

function organizingContainers(container: number[][]): string {
  const countOfTypes: number[] = []

  for (let i = 0; i < container.length; i++) {
    let sum = 0
    for (let j = 0; j < container[i].length; j++) {
      sum += container[j][i]
    }
    countOfTypes.push(sum)
  }

  console.log(countOfTypes)  
  for (let i = 0; i < countOfTypes.length; i++) {
    for (let j = 0; j < countOfTypes.length; j++) {
      if (countOfTypes[i] % countOfTypes[j] != 0) {
        return "Impossible"
      }
    }
    // if (countOfTypes.some(elem => { elem == countOfTypes[i] && countOfTypes.indexOf(elem) != i })) {

    // } else {
    //   return "Impossible"
    // }
  }

  return "Possible"
}

// function main() {
// 	const numberOfDays: number[][] = [[0, 2, 1], [1, 1, 1], [2, 0, 0]];

// 	const result: string = organizingContainers(numberOfDays);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };