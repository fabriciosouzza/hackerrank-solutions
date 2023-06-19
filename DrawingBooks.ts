// main();

function pageCount(n: number, p: number): number {
    const isEven = n % 2 == 0 ? true : false

    let toRight = 0;
    let toLeft = 0;

    for (let i = 0; i < n; i++) {
        let pag1 = i * 2
        let pag2 = (i * 2) + 1

        if (pag1 == p || pag2 == p) {
             toRight = i
             break;
        }
    }

    if (isEven) {
        for (let i = 0; i < n; i++) {
            let pag1 = n - (2 * i)
            let pag2 = (i/i) * ((n + 1) - (2 * i))

            if (pag1 == p || pag2 == p) {
                toLeft = i
                break;
            }}
    } else {
        for (let i = 0; i < n; i++) {
            let pag1 = (n - 1) - (2 * i)
            let pag2 = n - (2 * i)
            if (pag1 == p || pag2 == p) {
                toLeft = i
                break;
            }
        }
    }

    
    if (toRight > toLeft) {
        return toLeft
    } else {
        return toRight
    }
}

//---------Second Solution - more math, less code----------//
// function pageCount(n: number, p: number): number {
//   let minPageToTurn = 0;
//   if (n >= p && n >= 1 && p >= 1) {
//     let increasingTerm = Math.floor(p / 2);
//     let decreasingTerm = Math.ceil((n + ((n % 2) * - 1) - p) / 2);
//     minPageToTurn = Math.min(increasingTerm, decreasingTerm);
//   }
//   return minPageToTurn;
// }


// // Uncomment to Run
// function main() {
//   const n: number = 5; //o número de páginas do livro - 6
//   const p: number = 4; //o número da página para onde virar - 5

//   //Retorno: o número mínimo de páginas para virar - 1

//   const result: number = pageCount(n, p);

//   console.log("\nOutput:\n\n", result);

//   console.log("\n- - -");
// }