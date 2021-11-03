const { exit, stderr } = process;

const allowedFlagConfig = ['-c', '--config'];

module.exports = function (flags) {
  const configFlag = flags.filter((item) => allowedFlagConfig.includes(item));

  if (!configFlag.length || configFlag.length > 1) {
    stderr.write(
      'The config flag ("-c" or "--config") is required! And only one!'
    );
    exit();
  }

  return configFlag;
};
