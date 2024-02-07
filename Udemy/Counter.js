//  Write a function that takes two arrays as parameters,
// and then return an array that is the intersection of these two arrays.
// For example, Intersection([1, 2, 3], [5, 16, 1, 3]) should return [1, 3].

// Ex.Intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]);   // [3, 6, 8, 15]

function Intersection(arr1, arr2) {
  const sameNum = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};
  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      sameNum.push(property);
    }
  }
  return sameNum;
}

console.log(Intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]));

// O(n)