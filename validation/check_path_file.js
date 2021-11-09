const fs = require('fs');
const path = require('path');
const { ValidationError } = require('../my_errors/errors');

module.exports = function (flags, flag) {
  if (!flag) return null;

  const flagIndex = flags.indexOf(flag);

  if (flags[flagIndex + 1]) {
    const pathFile = flags[flagIndex + 1];

    if (!fs.existsSync(path.resolve(__dirname, '..', pathFile))) {
      throw new ValidationError(
        `No file to ${
          flag === '-i' || flag === '--input' ? 'read' : 'write'
        } was found. Check the correctness of the entered parameters.`
      );
    }
    return pathFile;
  } else {
    throw new ValidationError(
      `The file path must be specified after the "${flag}" flag.`
    );
  }
};
