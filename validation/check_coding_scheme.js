const { ValidationError } = require('../my_errors/errors');

const permissibleEncodingSchemes = ['C1', 'C0', 'R1', 'R0', 'A'];

module.exports = function (flags, configFlag) {
  const flagIndex = flags.indexOf(configFlag[0]);

  if (flags[flagIndex + 1]) {
    const encodingScheme = flags[flagIndex + 1].split('-');

    encodingScheme.forEach((element) => {
      if (!permissibleEncodingSchemes.includes(element)) {
        throw new ValidationError(
          `Incorrect coding scheme! Supported -c "C1-C1-A-R0" format and values ${permissibleEncodingSchemes}.`
        );
      }
    });
    return encodingScheme;
  } else {
    throw new ValidationError(
      `The "-c" or "--config" argument must come before the encoding scheme.`
    );
  }
};
