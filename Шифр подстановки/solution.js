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
  let i = 0;

  // return replaces.reduce((result, { from, to }) => {


    // const [replacedStart, replacedEnd] = replaced;
    // const start = match.index;
    // const end = start + to.length;
    // const isOverlapped = start > replacedStart && start < replacedEnd
    //   || end < replacedEnd && end > replacedStart;

    // if (isOverlapped) {
    //   return result;
    // }

    // replaced[0] = Math.min(match.index, replaced[0]);
    // replaced[1] = Math.max(match.index + to.length, replaced[1]);
    //


  // }, message)

  // const reg = new RegExp(from, "g");
  // const match = result.match(reg);

  // if (!match || match.index < i) {
  //   return result;
  // }

  // return result.replace(reg, to)
  //

  if (replaces.length === 0) {
    return message;
  }

  const map = new Map();
  const prereg = replaces.reduceRight((result, {from, to}, index) => {
    const tos = map.get(from)
    map.set(
      from,
      Array.isArray(tos) ? (tos.push(to), tos) : [to]
    )
    return result + "(" + from + ")" + (index > 0 ? "|" : "");
  }, "")

  const reg = new RegExp(prereg);
  console.log(reg);
  const res = message.split(reg).filter(Boolean);

  res.forEach((chunk, index) => {
    map.has(chunk) && map.get(chunk).length > 0 && (res[index] = map.get(chunk).pop());
  });

  return res.join("");
}

console.log(decode('Aa', [{ from: 'a', to: 'b' }]));
console.log(decode('ab', [{ from: 'a', to: 'b' }]));
// console.log(decode('ba', [{ from: 'b', to: 'ba' }, { from: 'b', to: 'r' }]));
console.log(decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]));
console.log(decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]));
console.log(decode("ab", [{ "from": "a", "to": "bar" }, { "from": "ab", "to": "foo" }]));
console.log(decode("' abcdb   '", []));

module.exports = { decode };
