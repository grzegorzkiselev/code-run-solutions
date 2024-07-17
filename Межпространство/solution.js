const assert = require("assert");

function interspace(inputString) {
  const result = inputString.match(
    /^([G-HK-U][3-8]{3})(B|T)((?<=B)[C|K|M|B][G|J|P]|(?<=T)[O|R|S][J|8|M|E])([A-Y0-9]{1,24})Z$/,
  );

  return result === null ? null : result.slice(1, 5);
};

assert.deepEqual(interspace("G333TR81Z"), [ 'G333', 'T', 'R8', '1' ]);
assert.deepEqual(interspace("O464TR849BM182BDZ"), [ 'O464', 'T', 'R8', '49BM182BD' ]);
assert.deepEqual(interspace("U345BMG123456789ABCDEFZ"), [ 'U345', 'B', 'MG', '123456789ABCDEF' ]);
