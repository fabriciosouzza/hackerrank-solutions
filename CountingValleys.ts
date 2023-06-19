function countingValleys(steps: number, path: string): number {
	let arrPath: string[] = [];
	let baseline: number = 0;
	let arrDisplacement: number[] = [];
	let valleyCount: number = 0;

	arrPath = path.split("")

	arrPath.map(element => {
		if (element == "U") {
			baseline += 1
			arrDisplacement.push(baseline)
		} else {
			baseline -= 1
			arrDisplacement.push(baseline)
			}
	})

	for (let i = 0; i < arrDisplacement.length; i++) {
		if (arrDisplacement[i] == 0 && arrDisplacement[i-1] < 0) {
				valleyCount += 1
		}
	}
	return valleyCount

}

// function main() {
//   const steps: number = 8;
//   const path: string = "UDDDUDUU";

//   const result: number = countingValleys(steps, path);

//   console.log("\nOutput:\n\n", result);

//   console.log("\n- - -");
// }

// main();