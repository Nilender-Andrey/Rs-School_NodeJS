const { exit, stderr } = process;

module.exports = function (flags, allowedFlag) {
  const writeFlag = flags.filter((item) => allowedFlag.includes(item));

  if (writeFlag.length > 1) {
    stderr.write(
      `Ошибка! Флаг конфигурации ("${allowedFlag[0]}" или "${allowedFlag[1]}") допускается только один!`
    );
    exit(1);
  }
  if (writeFlag.length === 0) {
    return false;
  }

  return writeFlag[0];
};
