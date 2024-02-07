function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j-1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapping = true;
      }
    }
    if (swapping === false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([4, 1, 5, 2, 7]));
