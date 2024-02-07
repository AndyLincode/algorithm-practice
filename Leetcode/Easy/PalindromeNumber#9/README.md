function reverseNumber(number: number): number {
let reversed = 0; // 1

while (number !== 0) {
reversed = reversed \* 10 + (number % 10);
number = Math.floor(number / 10);
}

return reversed;
}

console.log(reverseNumber(12345));

1. 先宣告一個變數紀錄 reversed 的數字
2. 一個迴圈
   a. 藉由數學公式將字串反轉 ⇒ reversed \* 10 再加上 number / 10 取餘數
   b. 將 number 取代為 number / 10 取整數(捨去已經加入的小數)


1. 藉由上方數字反轉公式反轉數字。
2. 要記錄原本的數字(original)，並跟反轉後的數字做比較。
3. **⚠️ 遇到負數或尾數為 0 的非 0 數字時，不可能是 Palindrome Number，如果不排除會出現錯誤，因此要將這兩個狀況排除。**
