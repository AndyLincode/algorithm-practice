// 題目描述

// 請實作一個名為 `difference` 的函式，該函式接收兩個陣列作為參數。函式的功能是回傳只在第一個陣列中存在、在第二個陣列中不存在的元素，並且避免對重複值進行多餘的操作。

// answer of myself
function difference(arr1, arr2) {
  return arr1.filter((el) => !arr2.includes(el));
}

// answer1
// function difference(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }

// answer2
// function difference(arr1, arr2) {
//   const valuesSet = new Set(values);
//   return array.filter((value) => !valuesSet.has(value));
// }

difference([], []); // []
difference([1, 1, 2, 3], [2, 3]); // [1, 1]
difference([1, 2, 3], [1, 2, 3, 4]); // []
difference([4, 3, 2, 1], [1, 2, 3]); // [4]
