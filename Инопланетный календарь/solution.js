const assert = require("assert");

/** @returns string */
function alienCalendar(inputString) {
  const result = inputString.match(/\sta'((?:so|ko|ta|qa|goo)\s\d+)/i);

  return result == null
      ? "0"
      : result[1].toLocaleLowerCase();
}

assert.equal(alienCalendar("DUN 'Ej QAD Je pAtLh TLhOQ Ta'tA 11 PuS WoVBe' SICh Ta'tA 22 HuD,"), "ta 11");
assert.equal(alienCalendar("Ta'gh ta'So 29 jE yin"), "so 29");
assert.equal(alienCalendar(""), "0");
