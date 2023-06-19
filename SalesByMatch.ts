// main()

function sockMerchant(n: number, ar: number[]): number {
    let numberOfPairs = 0; 
    let standard: number[] = [];
    
    for (let i = 0; i < ar.length; i++) {
        if (!standard.includes(ar[i])) {
            standard.push(ar[i])
        }
    }
    for (let i = 0; i < standard.length; i++) {
        let equal = 0;
        for (let j = 0; j < ar.length; j++) {
          if (standard[i] == ar[j]) {  
            equal++
          }
        }
          numberOfPairs += Math.floor((equal) / 2)                
    }
    return numberOfPairs;
}

//Uncomment to Run
// function main() {
//     const n: number = 9;
//     const ar: number[] = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  
//     const result: number = sockMerchant(n, ar);
  
//     console.log("Output:\n\n", result);
  
//     console.log("\n- - -");
//   }