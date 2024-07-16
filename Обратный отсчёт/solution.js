function createCountdown(n) {
  let left = Number.isInteger(n) && n > 0 ? n : 0;

  return () => Math.max(left--, 0);
}