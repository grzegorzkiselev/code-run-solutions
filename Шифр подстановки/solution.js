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
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const firstChar = message[i];
    let currentFrom = firstChar;
    let currentTo = firstChar;

    for (const { from, to } of replaces) {
      if (message.substring(i, i + from.length) === from) {
        currentFrom = from;
        currentTo = to;
      }
    }

    result += currentTo;
    i += currentFrom.length - 1;

  }

  return result;
}

console.log(decode('Aa', [{ from: 'a', to: 'b' }]));
console.log(decode('ab', [{ from: 'a', to: 'b' }]));
console.log(decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]));
console.log(decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]));
console.log(decode("ab", [{ "from": "a", "to": "bar" }, { "from": "ab", "to": "foo" }]));

module.exports = { decode };
