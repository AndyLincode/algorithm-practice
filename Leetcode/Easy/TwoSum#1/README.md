利用Udemy中教到的Counter作法

1. 宣告一個counter物件來記錄數字和索引
2. 利用for迴圈遍歷整個nums陣列
3-1.  num1在每一輪迴圈，將目前的數字存起來
3-2.  num2計算target與num1的差值，存放在此變數
4. 檢查counter物件中是否存在一個數字等於num2，找到的話就代表此組合相加等於target，便返回該數字陣列
5. 如果沒有符合條件就將num1存入counter，且索引值為i