// 題目描述

// 請實作一個 `compact` 效用函式。 `compact` 能將輸入的陣列中的 `false`、`null`、0、空字串、`undefined` 和 NaN 都去除，並輸出一個新的陣列。請實作此 `compact` 函式。

// answer of myself
function compact(arr) {
  return arr.filter((el) => Boolean(el));
}

// answer1
// function compact(array) {
//   const result = [];
//   for (const value of array) {
//     if (value) {
//       result.push(value);
//     }
//   }
//   return result;
// }
//   answer2
// function compact(array) {
//   return array.filter(Boolean);
// }

// 範例一
compact([0, 1, false, 2, "", 3, "hello"]);
// => [1, 2, 3, 'hello']

// 範例二
compact([null, undefined, NaN, " "]);
// =>[' ']

// 範例三
compact([{ name: "Alice" }, null, { age: 30 }, undefined]);
// =>[{ name: 'Alice' }, { age: 30 }]
