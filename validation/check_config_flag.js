const { exit, stderr } = process;

const allowedFlagConfig = ['-c', '--config', '-с'];

module.exports = function (flags) {
  const configFlag = flags.filter((item) => allowedFlagConfig.includes(item));

  if (configFlag.length === 0 || configFlag.length > 1) {
    stderr.write(
      'Ошибка! Флаг конфигурации ("-c" или "--config") обязателен! И только один!'
    );
    exit(1);
  }

  return configFlag;
};
