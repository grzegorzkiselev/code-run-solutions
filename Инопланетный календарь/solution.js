
function parseDates(inputString) {
  const date = inputString.match(/ta'((so|ko|ta|qa|goo)\s(\d*))/i);
  
  return Array.isArray(date)
    ? date[1].toLowerCase()
    : 0;
}

console.log(parseDates("DUN 'Ej QAD Je pAtLh TLhOQ Ta'tA 1488 PuS WoVBe' SICh HuD,"))
console.log(parseDates("Ta'gh ta'So 29 jE yin"))
