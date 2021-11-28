const fs = require('fs');
const fsPromises = fs.promises;

module.exports = function (path, flags) {
  return fsPromises.open(path, flags);
};
