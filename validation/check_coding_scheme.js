const { exit, stderr } = process;
const permissibleEncodingSchemes = ['C1', 'C0', 'R1', 'R0', 'A'];

module.exports = function (flags, configFlag) {
  const flagIndex = flags.indexOf(configFlag[0]);
  const encodingSchem = flags[flagIndex + 1].split('-');
  encodingSchem.forEach((element) => {
    if (!permissibleEncodingSchemes.includes(element)) {
      stderr.write(
        `Incorrect coding scheme! Supported format "C1-C1-A-R0" and values ${permissibleEncodingSchemes}.`
      );
      exit();
    }
  });
  return encodingSchem;
};
