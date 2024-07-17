const assert = require("assert");

function morseCode(fullCode) {
  const groups = fullCode.split(" ");
  let result = [];
  let number = "";

  for (const group of groups) {
    if (group.length === 0) {
      number && (
        result.push(number + " "), number = "");
      continue;
    }

    const firstSym = group[0];

    const reg = new RegExp(firstSym === "R"
      ? "R(?<dashes>\\-*)\\1(?<dots>\\.+)\\2"
      : firstSym === "T"
        ? "T(?:\\-*)(?<dots>\\.+)(?<dashes>\\-*)"
        : "(?<dashes>\\-*)(?<dots>\\.+)"
    );

    const state = group.match(reg);

    number += String(
      state === null ? 0 : state.groups.dashes.length * 2 + state.groups.dots.length
    );
  }

  result.push(number);

  return result.join("");
}

assert.equal(
  morseCode("T..... T---.. -.... .----   .---- R........-- T..... T.----   R.......... .---- T..... ---..   .---- R----...... R----...... ...--"),
  "5261 1459 5158 1773"
);

assert.equal(
  morseCode("T.. T-- T..-- T--..   R.. R-- R..-- R--..   .. -- ..-- --.."),
  "2062 1013 2026"
);

// code = code.split("");
// let first = code[0];

// if (first === "T") {
//   code = code.slice(1).reverse();
// } else if (first === "R") {
//   code = code.slice(1).reduce((compressed, symbol, i) => {
//     (i & 1) && compressed.push(symbol);
//     return compressed;
//   }, [])
// }

// first = code[0];
// code = code.join("");
// const dashesCount = code.length - code.replace(/-/g, "").length;

// console.log(code);

// if (first === "-") {
//   numbers += String(
//     (dashesCount * 2) + (code.length - dashesCount)
//   );
// } else {
//   numbers += String(
//     (code.length - dashesCount)
//   );
// }
// }
