/** @param {array} a */
function sumExcept(a, i, n) {
  let sum = 0;
  i = Math.max(0, i), n = Math.max(0, n);

  let position = i === 0 ? n : 0;
  while (position < a.length) {
    const candidate = a[position];
    Number.isInteger(candidate) && (sum += Number(candidate));
    position += (position + 1 >= i && position <= i + n - 1) ? n + 1 : 1;
  }

  return sum;
}

console.log(sumExcept([1, 9, 8, 4], 1, 2));
console.log(sumExcept([1, 9, 8, 4.1], 1, 2));
console.log(sumExcept([1, 9, 8, 9], -5, 2));
console.log(sumExcept([1, 9, 8, 9], -5, 5));
console.log(sumExcept([1, 9, 8, 9], -5, -5));

console.log(sumExcept([1, 9, 8, 9], 2, 10));
