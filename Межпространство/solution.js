function validate(inputString) {
  const result = inputString.match(
    /^([G-HK-U][3-8]{3})(B|T)((?<=B)[C|K|M|B][G|J|P]|(?<=T)[O|R|S][J|8|M|E])([A-Y0-9]{1,24})Z$/,
  );
  return result === null ? null : result.slice(1, 5);
};

console.log(validate("G333TR81Z"));
console.log(validate("O464TR849BM182BDZ"));
console.log(validate("U345BMG123456789ABCDEFZ"));