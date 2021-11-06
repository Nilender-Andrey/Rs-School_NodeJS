const { exit, stderr } = process;
const permissibleEncodingSchemes = ['C1', 'C0', 'R1', 'R0', 'A'];

module.exports = function (flags, configFlag) {
  const flagIndex = flags.indexOf(configFlag[0]);

  if (flags[flagIndex + 1]) {
    const encodingSchem = flags[flagIndex + 1].split('-');
    encodingSchem.forEach((element) => {
      if (!permissibleEncodingSchemes.includes(element)) {
        stderr.write(
          `Ошибка! Неправильная схема кодирования! Поддерживаемый формат "C1-C1-A-R0" и значения ${permissibleEncodingSchemes}.`
        );
        exit(1);
      }
    });
    return encodingSchem;
  } else {
    stderr.write(
      `Ошибка! Аргумент "-с" или '--config' должен стоять перед схемой кодирования.`
    );
    exit(1);
  }
};
