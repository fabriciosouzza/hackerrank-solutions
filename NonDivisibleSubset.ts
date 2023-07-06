// main();

function nonDivisibleSubset(k: number, s: number[]): number {
  const arrOfRemainders: number[] = new Array(k).fill(0)
  let valueToReturn = 0;

  
  for (let i = 0; i < s.length; i++) {
    let remainder = s[i] % k
    arrOfRemainders[remainder] += 1;
  }
  
  arrOfRemainders[0] > 0 ? valueToReturn += 1 : valueToReturn;

  if (k % 2 == 0) {
    valueToReturn += Math.min(Math.floor(k / 2), 1)
  }

  for (let i = 1; i < Math.ceil(k / 2); i++) {
    if (i != k - i) {
      valueToReturn += Math.max(arrOfRemainders[i], arrOfRemainders[k - i])
    };
  };
  return valueToReturn;

};
  

// function main() {
//     const k: number = 9;
//     const s: number[] = [422346306, 940894801, 696810740, 862741861, 85835055, 313720373];
  
//     const result: number = nonDivisibleSubset(k, s);
  
//     console.log("Output:\n\n", result);
  
//     console.log("\n- - -");
//   }