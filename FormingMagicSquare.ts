// main();

function formingMagicSquare(s: number[][]): number {
  const squareTypeOne = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
  let typeOneCost = 0;
  const squareTypeTwo = [[6, 7, 2], [1, 5, 9], [8, 3, 4]];
  let typeTwoCost = 0;
  const squareTypeThree = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
  let typeThreeCost = 0;
  const squareTypeFour = [[2, 9, 4], [7, 5, 3], [6, 1, 8]];
  let typeFourCost = 0;
  const squareTypeFive = [[4, 3, 8], [9, 5, 1], [2, 7, 6]];
  let typeFiveCost = 0;
  const squareTypeSix = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];
  let typeSixCost = 0;
  const squareTypeSeven = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
  let typeSevenCost = 0;
  const squareTypeEight = [[6, 1, 8], [7, 5, 3], [2, 9, 4]];
  let typeEightCost = 0;


  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      typeOneCost += Math.abs(s[i][j] - squareTypeOne[i][j]);
      typeTwoCost += Math.abs(s[i][j] - squareTypeTwo[i][j]);
      typeThreeCost += Math.abs(s[i][j] - squareTypeThree[i][j]);
      typeFourCost += Math.abs(s[i][j] - squareTypeFour[i][j]);
      typeFiveCost += Math.abs(s[i][j] - squareTypeFive[i][j]);
      typeSixCost += Math.abs(s[i][j] - squareTypeSix[i][j]);
      typeSevenCost += Math.abs(s[i][j] - squareTypeSeven[i][j]);
      typeEightCost += Math.abs(s[i][j] - squareTypeEight[i][j]);
    };
  };

  const arrChangesSum = [typeOneCost, typeTwoCost, typeThreeCost, typeFourCost, typeFiveCost, typeSixCost, typeSevenCost, typeEightCost];

  return Math.min(...arrChangesSum)
};


// function main() {
//   const inputMatrix: number[][] = [[2, 1, 7], [9, 9, 9], [4, 8, 6]];

//   const result: number = formingMagicSquare(inputMatrix);

//   console.log("\nOutput:\n\n", result);
//   console.log("\n- - -");
// }