// main();

function cutTheSticks(arr: number[]): number[] {
    const arrOfSize: number[] = [];
    arr.sort((a, b) => a -b);

    do {
        arrOfSize.push(arr.length);
        console.log(arr)
        arr = arr.map(item => item - arr[0])
        .filter(item => item != 0)
    } while (arr.length != 0);

 return arrOfSize;
}

// function main() {
// 	const arr: number[] = [1, 13, 3, 8, 14, 9, 4, 4];

// 	const result: number[] = cutTheSticks(arr);

// 	console.log("Output:\n\n", result);

// 	console.log("\n- - -");
// };
