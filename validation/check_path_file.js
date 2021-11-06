const { exit, stderr } = process;
const fs = require('fs');
const path = require('path');

module.exports = function (flags, flag) {
  if (!flag) return null;

  const flagIndex = flags.indexOf(flag);

  if (flags[flagIndex + 1]) {
    const pathFile = flags[flagIndex + 1];

    fs.access(path.join(__dirname, '..', pathFile), function (err) {
      if (!err) {
        return pathFile;
      } else if (err.code === 'ENOENT') {
        stderr.write(
          `Ошибка! Файл для ${
            flag === '-i' || flag === '--input' ? 'чтения' : 'записи'
          } не найден. Проверьте корректность введеных параметров.`
        );
        exit(1);
      }
    });

    return pathFile;
  } else {
    stderr.write(
      `Ошибка! После флага "${flag}" должен быть указан путь к файлу`
    );
    exit(1);
  }
};
