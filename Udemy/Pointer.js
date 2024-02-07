// Write a function that given a sorted array of integers and a number. Find if there’s any pair in the array that has average of the given number. Find all of them. There might be multiple pairs fit the condition.

// Ex.
// averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5) The number pair is -11 and 14, 0 and 3, 1 and 2

function AveragePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg === avg) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }

  return result;
}

console.log(AveragePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));

// O(n)
