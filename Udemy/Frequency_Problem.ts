// Write a function that takes two strings and check if they have the same letters. Order doesn’t matter.
// Ex.
// sameFrequency(“abbc”, “aabc”)  false
// sameFrequency(“abba”, “abab”) true
// sameFrequency(“aasdebasdf”, ”adfeebed”) false

function sameFrequency1(letter1: String, letter2: String): boolean {
  let arr1 = letter1.split("");
  let arr2 = letter2.split("");
  let counter1: Record<string, number> = {};
  let counter2: Record<string, number> = {};
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) counter1[arr1[i]] = 1;
    else counter1[arr1[i]]++;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) counter2[arr2[i]] = 1;
    else counter2[arr2[i]]++;
  }

  for (let property in counter1) {
    if (!counter2[property]) {
      return false;
    }
    if (counter2[property] !== counter1[property]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency1("aabbc", "abbac"));
