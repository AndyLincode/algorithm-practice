//  Write a function that takes two arrays as parameters,
// and then return an array that is the intersection of these two arrays.
// For example, Intersection([1, 2, 3], [5, 16, 1, 3]) should return [1, 3].

// Ex.Intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]);   // [3, 6, 8, 15]

function Intersection(arr1, arr2) {
  const sameNum = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        sameNum.push(arr1[i]);
      }
    }
  }
  return sameNum;
}

console.log(Intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]));

// O(n^2)