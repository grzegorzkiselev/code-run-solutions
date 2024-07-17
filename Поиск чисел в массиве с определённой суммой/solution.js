function isSumOfTwoExists(nums, k) {  
  const cache = new Set();

  for (num of nums) {
    if (cache.has(num)) {
      return true;
    }

    cache.add(k - num);
  }

  return false;
}

console.log(isSumOfTwoExists([10, 15, 3, 7], 17));
