const findAllOccurrences = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result.push(i);
    }
  }
  return result;
};

console.log(findAllOccurrences([1, 3, 7, 8, 7, 5, 6, 7], 7));
// 應該輸出 [2, 4, 7]

console.log(findAllOccurrences([1, 2, 3, 4, 5], 10));
// 應該輸出 []
