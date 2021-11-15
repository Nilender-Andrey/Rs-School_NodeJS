const { stdin, stdout, exit } = process;
const fs = require('fs');
const path = require('path');

module.exports = function (output, pathToOutputFile) {
  process.on('SIGINT', () => {
    stdout.write('><((((o>  Good luck!  ><((((o>'), exit(1);
  });

  output.on('finish', function () {
    if (pathToOutputFile) {
      fs.appendFileSync(path.join(__dirname, '..', pathToOutputFile), '\n');
    }
  });
};
