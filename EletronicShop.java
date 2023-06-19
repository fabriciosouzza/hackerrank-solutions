// public class Solution {
//     static int getMoneySpent(int[] keyboards, int[] drives, int b) {
//       ArrayList<Integer> allCombinations = new ArrayList<Integer>();
//       for (int i = 0; i< keyboards.length; i++) {
//         for (int j = 0; j < drives.length; j++) {
//           int sumOfProduct = keyboards[i] + drives[j];
//           allCombinations.add(sumOfProduct);
//         };
//       };

//       int biggerValue = 0;

//       for (int i = 0; i < allCombinations.size(); i++) {
//         if ((allCombinations.get(i) > biggerValue) && (allCombinations.get(i) <= b)) {
//           biggerValue = allCombinations.get(i);
//         };
//       };

//       if (biggerValue > 0) {
//         return biggerValue;
//       } else {
//         return -1;
//       }


//     }
// }