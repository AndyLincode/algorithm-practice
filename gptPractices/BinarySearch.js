const findFirstOccurrence = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  let result = -1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] === num) {
      result = middle;
      max = middle - 1;
    } else if (arr[middle] < num) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }

  return result;
};

console.log(findFirstOccurrence([1, 2, 2, 2, 3, 4, 5], 2)); // 應該輸出 1
console.log(findFirstOccurrence([1, 2, 3, 4, 5], 6)); // 應該輸出 -1
console.log(findFirstOccurrence([1, 1, 1, 1, 1], 1)); // 應該輸出 0
console.log(findFirstOccurrence([1, 3, 5, 7, 9], 7)); // 應該輸出 3
