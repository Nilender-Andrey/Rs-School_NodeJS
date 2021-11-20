const { stderr } = process;
const path = require('path');
const { Writable } = require('stream');
const fs_write = require('./fs_write');
const fs_open = require('../open_fs');

class myWritingStream extends Writable {
  constructor(pathFile) {
    super({ decodeStrings: false });
    this.pathFile = path.join(__dirname, '../../..', pathFile);
    this.fd = null;
  }

  _construct(callback) {
    fs_open(this.pathFile, 'a')
      .then((result) => {
        this.fd = result.fd;
        callback();
      })
      .catch((err) => {
        stderr.write('Error! Could not open file for writing.');
        callback(err);
      });
  }

  _write(chunk, encoding, callback) {
    try {
      fs_write(this.fd, chunk, callback);
    } catch (err) {
      stderr.write('Error writing to file.');
      callback(err);
    }
  }
}

module.exports = myWritingStream;
