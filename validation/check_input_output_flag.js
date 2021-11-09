const { ValidationError } = require('../my_errors/errors');

module.exports = function (flags, allowedFlag) {
  const writeFlag = flags.filter((item) => allowedFlag.includes(item));

  if (writeFlag.length > 1) {
    throw new ValidationError(
      `Only one ("${allowedFlag[0]}" or "${allowedFlag[1]}") configuration flag is allowed!`
    );
  }
  if (writeFlag.length === 0) {
    return false;
  }

  return writeFlag[0];
};
