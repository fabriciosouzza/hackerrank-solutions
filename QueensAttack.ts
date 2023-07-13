// main();

// function queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
//   let numberOfAttacks = 0;
//   if (n == 1) {
//     return 0;
//   }
  
//   let rowCount = 0;
//   let closestObstacleR = n - c_q;
//   let closestObstacleL = c_q - 1;
  
  
//   for (let i = 0; i < obstacles.length; i++) {
//     if (obstacles[i][0] == r_q) {
//       if (obstacles[i][1] > c_q) {
//         obstacles[i][1] - (c_q - 1) < closestObstacleR ? closestObstacleR = obstacles[i][1] - (c_q - 1) : false;
//       } else {
//         c_q - obstacles[i][1] - 1 < closestObstacleL ? closestObstacleL = c_q - obstacles[i][1] - 1 : false;
//       }
//     }
//   }
  
//   let columnCount = 0;
//   let closestObstacleU = n - r_q;
//   let closestObstacleD = r_q - 1;
  
//   for (let i = 0; i < obstacles.length; i++) {
//     if (obstacles[i][1] == c_q) {
//       if (obstacles[i][0] > r_q) {
//         obstacles[i][0] - (r_q - 1) < closestObstacleU ? closestObstacleU = obstacles[i][0] - (r_q - 1) : false;
//       } else {
//         r_q - obstacles[i][0] - 1 < closestObstacleD ? closestObstacleD = r_q - obstacles[i][0] - 1 : false;
//       }
//     }
//   }
  
//   let diagonalCount = 0;
//   let quadrPlusPlus: number;
//   let quadrPlusMinus: number;
//   let quadrMinusPlus: number;
//   let quadrMinusMinus: number;
  
//   let variablei = r_q
//   let variablej = c_q
//   let count = 0;

//   while (variablei < n && variablej < n) {
//     count++;
//     variablei++;
//     variablej++;
//   }
  
//   quadrPlusPlus = count;

//   variablei = r_q
//   variablej = c_q
//   count = 0;

//   while (variablei < n && variablej > 1) {
//     count++;
//     variablei++;
//     variablej--;
//   }

//   let positionPlusMinus: number[] = [];
//   positionPlusMinus.push(variablei)
//   positionPlusMinus.push(variablej)

//   quadrPlusMinus = count;

//   variablei = r_q
//   variablej = c_q
//   count = 0;

//   while (variablei > 1 && variablej < n) {
//     count++;
//     variablei--
//     variablej++;
//   }

//   quadrMinusPlus = count;  

//   variablei = r_q
//   variablej = c_q
//   count = 0;

//   while (variablei > 1 && variablej > 1) {
//     count++;
//     variablei--
//     variablej--;
//   }
  
//   quadrMinusMinus = count; 

//   console.log(`quadrPlusPlus: ${quadrPlusPlus}, quadrPlusMinus: ${quadrPlusMinus}, quadrMinusPlus: ${quadrMinusPlus}, quadrMinuMinus: ${quadrMinusMinus}`)

//   for (let i = 0; i < obstacles.length; i++) {
//     if (Math.abs(obstacles[i][0] - r_q) == Math.abs(obstacles[i][1] - c_q)) {
//       if (obstacles[i][0] > r_q && obstacles[i][1] > c_q) {
//         Math.abs(obstacles[i][1] - c_q - 1) < quadrPlusPlus ? quadrPlusPlus = Math.abs(obstacles[i][0] - r_q) - 1: false;

//       } else if (obstacles[i][0] < r_q && obstacles[i][1] > c_q) {
//         Math.abs(obstacles[i][1] - c_q - 1) < quadrPlusMinus ? quadrPlusMinus = Math.abs(obstacles[i][0] - r_q) - 1: false;

//       } else if (obstacles[i][0] > r_q && obstacles[i][1] < c_q) {
//         Math.abs(obstacles[i][1] - c_q - 1) < quadrMinusPlus ? quadrMinusPlus = Math.abs(obstacles[i][0] - r_q) - 1: false;

//       } else if (obstacles[i][0] < r_q && obstacles[i][1] < c_q) {
//         Math.abs(obstacles[i][1] - c_q - 1) < quadrMinusMinus ? quadrMinusMinus = Math.abs(obstacles[i][0] - r_q) - 1: false;

//       }
//     }
//   }

  
//   rowCount = closestObstacleL + closestObstacleR;
//   columnCount = closestObstacleU + closestObstacleD;

//   diagonalCount = quadrPlusPlus + quadrPlusMinus + quadrMinusPlus + quadrMinusMinus; 

//   numberOfAttacks = rowCount + columnCount + diagonalCount;

//   console.log(`quadrPlusPlus: ${quadrPlusPlus}, quadrPlusMinus: ${quadrPlusMinus}, quadrMinusPlus: ${quadrMinusPlus}, quadrMinuMinus: ${quadrMinusMinus}`)

//   console.log(rowCount)
//   console.log(columnCount)
//   console.log(diagonalCount)

//   return numberOfAttacks;
  
// };

// function main() {
  
// 	const boardSide: number = 100;
// 	const numberOfObstacles: number = 100;
// 	const queenRow: number = 48;
// 	const queenColumn: number = 81;
// 	const arrOfObstacle: number[][] = [[54, 87],
//   [64, 97],
//   [42, 75],
//   [32, 65],
//   [42, 87],
//   [32, 97],
//   [54, 75],
//   [64, 65],
//   [48, 87],
//   [48, 75],
//   [54, 81],
//   [42, 81],
//   [45, 17],
//   [14, 24],
//   [35, 15],
//   [95, 64],
//   [63, 87],
//   [25, 72],
//   [71, 38],
//   [96, 97],
//   [16, 30],
//   [60, 34],
//   [31, 67],
//   [26, 82],
//   [20, 93],
//   [81, 38],
//   [51, 94],
//   [75, 41],
//   [79, 84],
//   [79, 65],
//   [76, 80],
//   [52, 87],
//   [81, 54],
//   [89, 52],
//   [20, 31],
//   [10, 41],
//   [32, 73],
//   [83, 98],
//   [87, 61],
//   [82, 52],
//   [80, 64],
//   [82, 46],
//   [49, 21],
//   [73, 86],
//   [37, 70],
//   [43, 12],
//   [94, 28],
//   [10, 93],
//   [52, 25],
//   [50, 61],
//   [52, 68],
//   [52, 23],
//   [60, 91],
//   [79, 17],
//   [93, 82],
//   [12, 18],
//   [75, 64],
//   [69, 69],
//   [94, 74],
//   [61, 61],
//   [46, 57],
//   [67, 45],
//   [96, 64],
//   [83, 89],
//   [58, 87],
//   [76, 53],
//   [79, 21],
//   [94, 70],
//   [16, 10],
//   [50, 82],
//   [92, 20],
//   [40, 51],
//   [49, 28],
//   [51, 82],
//   [35, 16],
//   [15, 86],
//   [78, 89],
//   [41, 98],
//   [70, 46],
//   [79, 79],
//   [24, 40],
//   [91, 13],
//   [59, 73],
//   [35, 32],
//   [40, 31],
//   [14, 31],
//   [71, 35],
//   [96, 18],
//   [27, 39],
//   [28, 38],
//   [41, 36],
//   [31, 63],
//   [52, 48],
//   [81, 25],
//   [49, 90],
//   [32, 65],
//   [25, 45],
//   [63, 94],
//   [89, 50],
//   [43, 41]];

//   const result: number = queensAttack(boardSide, numberOfObstacles, queenRow, queenColumn, arrOfObstacle);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };