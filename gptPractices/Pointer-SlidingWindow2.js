const maxSumSubarray = (arr, k) => {
  if (k > arr.length) return null;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let j = k; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - k];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};
