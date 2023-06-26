main();
function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
  const arrOfqueries: number[] = [];
  const copyOfArray: any[] = a;
  let changes = k % a.length;

  for (let i = 1; i <= changes; i++) {
    let numToUnshift = copyOfArray.pop()
    copyOfArray.unshift(numToUnshift);    
  }

  queries.forEach(element => {
    arrOfqueries.push(a[element])
  });

  return arrOfqueries
}

function main() {
	const array: number[] = [3, 4, 5];
	const numOfChanges: number = 3;
	const query: number[] = [0, 1]

  const result = circularArrayRotation(array, numOfChanges, query);
	console.log("Output:\n\n", result);

	console.log("\n- - -");
};