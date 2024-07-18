/**
 *
 * @typedef Replace
 *
 * @property {string} from
 * @property {string} to
 */

/**
 *
 * @param {string} message
 * @param {Replace[]} replaces
 * @returns {string}
 */

function decode(message, replaces) {
  const map = new Map();
  const reg = new RegExp(
    replaces.reduceRight((result, {from}, index) => {
      const { from: leftFrom, to: leftTo } = replaces[replaces.length - 1 - index]
      const tos = map.get(
          leftFrom
      );
      map.set(
        leftFrom,
        Array.isArray(tos) ? (tos.push(leftTo), tos) : [leftTo]
      );

      return result + "(" + from + ")" + (index > 0 ? "|" : "");
    }, "")
  );

  return message.split(reg).reduce((result, chunk, index) => {
    const candidate = map.get(chunk);
    return result + (candidate && candidate.length > 0
        ? candidate.pop()
        : chunk || "");
  }, "");
}

console.log(decode('Aa', [{ from: 'a', to: 'b' }]));
console.log(decode('ab', [{ from: 'a', to: 'b' }]));
// console.log(decode('ba', [{ from: 'b', to: 'ba' }, { from: 'b', to: 'r' }]));
console.log(decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]));
console.log(decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]));
console.log(decode("ab", [{ "from": "a", "to": "bar" }, { "from": "ab", "to": "foo" }]));
console.log(decode("' abcdb   '", []));

module.exports = { decode };
