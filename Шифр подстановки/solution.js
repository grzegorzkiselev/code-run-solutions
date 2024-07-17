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

// Специальных преобразований регистра делать не нужно, заглавные и строчные буквы - это разные буквы:
// decode('Aa', [{ from: 'a', to: 'b' }]) === 'Ab'

// Части исходного сообщения, не требующие замены, остаются, как есть:
// decode('ab', [{ from: 'a', to: 'b' }]) === 'bb'

// Уже заменённые символы нельзя заменять повторно.:
// decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]) === 'bar'

// Зашифрованное сообщение расшифровывается слева направо. Замена, встретившаяся в слове раньше, имеет приоритет.:
// decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'



function decode(message, replaces) {
  const replacementsMap = new Map();
  let mapSize = replaces;

  replaces.forEach((replacement) => {
    const key = replacement.from[0];
    const value = replacementsMap.get(key);
    value
      ? value.push(replacement)
      : replacementsMap.set(key, [replacement]);
  })

  let result = "";
  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const currentReplacements = replacementsMap.get(letter);

    if (!currentReplacements || currentReplacements.length === 0) {
      result += letter;
      continue;
    }

    const { from, to } = currentReplacements.pop();
    i += from.length - 1;
    result += to;
  }

  console.log(result)
}

decode('Aa', [{ from: 'a', to: 'b' }])
decode('ab', [{ from: 'a', to: 'b' }])
decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }])
decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }])
decode("ab", [{ "from": "a", "to": "bar" }, { "from": "ab", "to": "foo" }])

module.exports = { decode };
