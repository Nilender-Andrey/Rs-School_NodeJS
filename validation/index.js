const checkConfigFlag = require('./check_config_flag');
const checkCodingScheme = require('./check_coding_scheme');

module.exports = function (flags) {
  const codingScheme = checkCodingScheme(flags, checkConfigFlag(flags));

  return codingScheme;
};
