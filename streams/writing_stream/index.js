const fs = require('fs');
const { exit, stderr } = process;
const path = require('path');
const { Writable } = require('stream');

class myWritingStream extends Writable {
  constructor(pathFile) {
    super({ decodeStrings: false });
    this.pathFile = pathFile;
  }

  _construct(callback) {
    fs.open(path.join(__dirname, '../..', this.pathFile), 'a', (err, fd) => {
      if (err) {
        stderr.write('Error! Could not open file for writing.');
        exit(1);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    try {
      fs.write(this.fd, chunk, callback);
    } catch (err) {
      stderr.write('Error writing to file.');
      callback(err);
    }
  }
}

module.exports = myWritingStream;
