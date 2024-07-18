/** @param {array} a */
function sumExcept(a, i, n) {
  
  let pos = -1;
  let acc = 0;
  while (++pos < a.length) {
    if (pos < i || pos > i + n - 1) {
      continue;
    }
    const candidate = a[pos];
    acc += candidate * Number.isInteger(candidate);
  }
  console.log(acc)
  return acc;
}
console.log(sumExcept([1, 9, 8, 4], 1, 2) === 5);
