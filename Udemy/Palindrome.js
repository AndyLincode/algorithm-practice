// Write a function that checks if the input string is a palindrome. Palindrome is a word that can be read forwards and backwards.

// Ex.
// isPalindrome('awesome') false
// isPalindrome('foobar') false
// isPalindrome('tacocat') true
// isPalindrome('amanaplanacanalpanama') true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
