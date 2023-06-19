// main();

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
	const valueOfPositions: number[] = [ranked[0]];
	const arrOfPlayerRanking: number[] = [];

	for (let i = 1; i < ranked.length; i++) {
		if (ranked[i] < ranked[i - 1]) {
			valueOfPositions.push(ranked[i]);
		};
	};

	valueOfPositions.push(0);

	if (player[0] == 0) {
		for (let i = 0; i < player.length; i++) {

			for (let j = valueOfPositions.length - 1; j != 0; j--) {
				if (player[i] == valueOfPositions[j]) {
					arrOfPlayerRanking.push(j + 1);
					break;

				} else if (player[i] > valueOfPositions[j] && player[i] < valueOfPositions[j - 1]) {
					arrOfPlayerRanking.push(j + 1);
					break;

				} else if (player[i] > valueOfPositions[j] && j == 1) {
					arrOfPlayerRanking.push(j);
					break;
				}
			};

		};
	} else {
		for (let i = 0; i < player.length; i++) {
			let count = 1;
			for (let j = 0; j < valueOfPositions.length; j++) {
				if (player[i] >= valueOfPositions[j]) {
					arrOfPlayerRanking.push(count)
					break;
				};
				count++;
			};
		};
	}

	return arrOfPlayerRanking;
};

// function main() {
// 	const ranking: number[] = [100, 90, 90, 80, 75, 60];
// 	const score: number[] = [50, 65, 77, 90, 102];
// 	const result: number[] = climbingLeaderboard(ranking, score);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };










//First solution, but exceed the time limit
// function climbingLeaderboard(ranked: number[], player: number[]): number[] {
// 	const valueOfPositions: any = { 1: ranked[0] };
// 	const arrOfPlayerRanking: number[] = [];
// 	let count = 1;

// 	for (let i = 1; i < ranked.length; i++) {
// 		if (ranked[i] < ranked[i - 1]) {
// 			count++;
// 			valueOfPositions[count] = ranked[i];
// 		};
// 	};

// 	count++;
// 	valueOfPositions[count] = 0;

// 	for (let i = 0; i < player.length; i++) {
// 		for (const key in valueOfPositions) {
// 			if (player[i] == valueOfPositions[key]) {
// 				arrOfPlayerRanking.push(Number(key))
// 				break;
// 			} else if (player[i] > valueOfPositions[key]) {
// 				arrOfPlayerRanking.push(Number(key))
// 				break;
// 			};
// 		};
// 	};

// 	return arrOfPlayerRanking;
// };

// function main() {
// 	const ranking: number[] = [100, 90, 90, 80, 75, 60];
// 	const score: number[] = [50, 65, 77, 90, 102];

// 	const result: number[] = climbingLeaderboard(ranking, score);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };