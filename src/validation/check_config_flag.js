const { ValidationError } = require('../my_errors/errors');

const allowedFlagConfig = ['-c', '--config', '-с'];

module.exports = function (flags) {
  const configFlag = flags.filter((item) => allowedFlagConfig.includes(item));

  if (configFlag.length === 0 || configFlag.length > 1) {
    throw new ValidationError(
      `The config flag ("-c" or "--config") is required! And only one!`
    );
  }

  return configFlag;
};
