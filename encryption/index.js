const encode = require('./encode');

module.exports = function (text, cipher) {
  let shift = 0;
  switch (cipher) {
    case 'C1':
      shift = 1;
      break;
    case 'C0':
      shift = -1;
      break;
    case 'R1':
      shift = 8;
      break;
    case 'R0':
      shift = -8;
      break;
    case 'A':
      shift = 'mirror';
      break;
    default:
      break;
  }

  return encode(text, shift);
};
