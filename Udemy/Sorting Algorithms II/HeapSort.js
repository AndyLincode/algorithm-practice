let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];
heapSort();
console.log(arr);

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    // 從最右下角開始
    maxHeapify(i); // 建立 max heap
  }
}

function maxHeapify(i) {
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    // swap arr[i] with arr[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest); // recursion 重複執行到符合max heap
  }
}

function heapSort() {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    // exchange arr[0] with arr[i]
    let temp = arr[0]; // 最大值放入temp
    arr[0] = arr[i]; // arr[0] 跟 arr[i] 互換
    arr[i] = temp; // 最大值放進array的最後
    heapSize -= 1; // array長度-1(排除最後一項，因為最後一項已排序)
    maxHeapify(0); // 重新製作max heap
  }

  return arr;
}
