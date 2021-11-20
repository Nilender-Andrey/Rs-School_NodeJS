const fs = require('fs');

module.exports = function (fd, chunk, callback) {
  return fs.write(fd, chunk, callback);
};
