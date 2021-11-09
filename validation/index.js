const checkConfigFlag = require('./check_config_flag');
const checkCodingScheme = require('./check_coding_scheme');
const checkInputOutputFlag = require('./check_input_output_flag');
const checkPathFile = require('./check_path_file');

const allowedInputFlag = ['-i', '--input'];
const allowedOutputFlag = ['-o', '--output'];

module.exports = function (flags) {
  const codingScheme = checkCodingScheme(flags, checkConfigFlag(flags));

  const pathToInputFile = checkPathFile(
    flags,
    checkInputOutputFlag(flags, allowedInputFlag)
  );
  const pathToOutputFile = checkPathFile(
    flags,
    checkInputOutputFlag(flags, allowedOutputFlag)
  );

  return { codingScheme, pathToInputFile, pathToOutputFile };
};
