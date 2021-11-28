module.exports = function (character) {
  if (typeof character !== 'string' || character.length !== 1)
    throw new Error('Entered incorrect data');

  if (character === character.toUpperCase()) {
    return true;
  }
  return false;
};
