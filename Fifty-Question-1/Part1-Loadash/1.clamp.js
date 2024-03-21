// 題目敘述
// 你正在開發一個處理數值資料的系統。請寫一個名為 `clamp` 的函式，它需要三個參數：

// - 一個數值 `number`
// - 一個最小值 `lower`
// - 一個最大值 `upper`

// 此函式應確保輸出的 `number` 始終落在指定的範圍内，包括最小值和最大值本身。你會如何實作這個 `clamp` 呢?

// 在範圍中，返回原值
clamp(7, 0, 9); // => 7

// 小於 lower，返回 lower
clamp(-12, -4, 5); // => -4

// 大於 upper，返回 upper
clamp(18, 3, 9); // => 9

// answer of myself
function clamp(number, lower, upper) {
  return number < lower ? lower : number > upper ? upper : number;
}

// answer 1
// function clamp(number, lower, upper) {
//     if (number < lower) {
//       return lower;
//     } else if (number > upper) {
//       return upper;
//     } else {
//       return number;
//     }
//   }

// answer 2
// function clamp(number, lower, upper) {
//     return Math.min(upper, Math.max(lower, number));
//   }
