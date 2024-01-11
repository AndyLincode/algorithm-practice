// Write two functions that calculate the max and min sum of n consecutive numbers in an array.

// Ex.
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);  // 12
// minSum ([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let max_sum = -Infinity; // 先設定負無限大，讓陣列和(任意數包含負數)能夠取代變成max_sum

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > max_sum) {
      max_sum = attempt;
    }
  }

  return max_sum;
}
function minSum(arr, size) {
  let min_sum = Infinity; // 先設定無限大，讓陣列和(任意數)能夠取代變成min_sum

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_sum) {
      min_sum = attempt;
    }
  }

  return min_sum;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28

// O(n^2)
