const сheckUppercase = require('./сheck_uppercase');

let arr_en = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

module.exports = function (text, shift) {
  let newText = '';
  let newCharacter;

  for (let character of text) {
    if (arr_en.includes(character.toLowerCase())) {
      const position = arr_en.indexOf(character.toLowerCase());
      if (shift === 'mirror') {
        const mirrorArr_en = [...arr_en].reverse();

        newCharacter = сheckUppercase(character)
          ? mirrorArr_en[position].toUpperCase()
          : mirrorArr_en[position];
      } else {
        const newPosition = (position + shift + arr_en.length) % arr_en.length;

        newCharacter = сheckUppercase(character)
          ? arr_en[newPosition].toUpperCase()
          : arr_en[newPosition];
      }
    } else {
      newCharacter = character;
    }
    newText += newCharacter;
  }

  return newText;
};
