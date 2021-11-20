const fs = require('fs');
const path = require('path');
const { exit, stderr } = process;
const { Readable } = require('stream');
const fs_open = require('../open_fs');

class myReadingStream extends Readable {
  constructor(pathFile) {
    super();
    this.pathFile = path.join(__dirname, '../../..', pathFile);
    this.fd = null;
  }

  _construct(callback) {
    fs_open(this.pathFile, 'r')
      .then((result) => {
        this.fd = result.fd;
        callback();
      })
      .catch((err) => {
        stderr.write('Error! Could not open file for writing.');
        callback(err);
      });
  }
  _read() {
    fs.read(this.fd, (err, bytesRead, buffer) => {
      if (err) {
        stderr.write('Error! Failed to read file.');
        exit(1);
      } else {
        this.push(bytesRead > 0 ? buffer.slice(0, bytesRead) : null);
      }
    });
  }
}

module.exports = myReadingStream;
