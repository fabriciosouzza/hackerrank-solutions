// main();

function jumpingOnClouds(c, k) {
  let energy = 100;

  let i = 0;

  do {
    i = ((i + k) % c.length)
    if (i == 0) {
      c[i] == 0 ? energy -= 1 : energy -= 3;
      return energy;
    } else {
      c[i] == 0 ? energy -= 1 : energy -= 3;
    }
  } while (i != 0);
};

// function main() {
// 	const arrClouds = [0, 0, 1, 0, 0, 1, 1, 0];
// 	const jumpSize = 2;

// 	const result = jumpingOnClouds(arrClouds, jumpSize);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };