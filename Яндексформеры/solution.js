const assert = require("assert");

function getMaxCompound(N, staff, K) {
  if (K === N) {
    return staff.reduce((acc, grade) => acc + grade);
  }

  const MAX_GRADE = 25;
  const sorted = Array.from(
    {
      length: MAX_GRADE,
    },
    () => 0,
  );

  staff.forEach((grade) => sorted[grade]++);

  let maxSum = 0;
  for (let i = sorted.length - 1; i >= 0 && K > 0; i--) {
    const countOfGrade = Math.min(K, sorted[i]);
    maxSum += countOfGrade * i;
    K -= countOfGrade;
  }

  return maxSum;
}

assert.equal(
  getMaxCompound(8, [5, 13, 8, 4, 4, 15, 1, 9], 8),
  59
);
assert.equal(
  getMaxCompound(11, [14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8], 5),
  90,
);
assert.equal(
  getMaxCompound(15, [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4], 1),
  20,
);
assert.equal(
  getMaxCompound(12, [22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19], 7),
  151,
);
assert.equal(
  getMaxCompound(7, [10, 3, 21, 23, 6, 3, 8], 4),
  62,
);
assert.equal(
  getMaxCompound(7, [1, 1, 1, 1, 1, 1, 1], 6),
  6,
);
