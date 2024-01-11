// Write two functions that calculate the max and min sum of n consecutive numbers in an array.

// Ex.
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);  // 12
// minSum ([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }

  return maxValue;
}
function minSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let minValue = 0;
  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }

  let tempValue = minValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue < minValue) {
      minValue = tempValue;
    }
  }

  return minValue;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28

// O(n)
