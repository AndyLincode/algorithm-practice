// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// function reverseNumber(number: number): number {
//   let reversed = 0;
//   while (number !== 0) {
//     reversed = reversed * 10 + (number % 10);
//     number = Math.floor(number / 10);
//   }
//   return reversed;
// }
// console.log(reverseNumber(12345));
function PalindromeNumber(number) {
  if (number < 0 || (number !== 0 && number % 10 === 0)) {
    return false;
  }
  let reversed = 0;
  let original = number;
  while (number !== 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversed === original;
}
console.log(PalindromeNumber(121));
console.log(PalindromeNumber(-121));
console.log(PalindromeNumber(123));
