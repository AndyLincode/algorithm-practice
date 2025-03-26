const lengthOfLongestTwoDistinct = (str) => {
  let left = 0,
    right = 0,
    maxLength = 0;
  let counter = {};
  let uniqueCount = 0;

  while (right < str.length) {
    let char = str[right];

    if (!counter[char]) {
      counter[char] = 1;
      uniqueCount++;
    } else {
      counter[char]++;
    }

    while (uniqueCount > 2) {
      let leftChar = str[left];
      counter[leftChar]--;
      if (counter[leftChar] === 0) {
        delete counter[leftChar];
        uniqueCount--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }

  return maxLength;
};
