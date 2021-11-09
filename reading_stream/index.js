const fs = require('fs');
const path = require('path');
const { exit, stderr } = process;
const { Readable } = require('stream');

class myReadingStream extends Readable {
  constructor(pathFile) {
    super();
    this.pathFile = pathFile;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(path.join(__dirname, '..', this.pathFile), (err, fd) => {
      if (err) {
        stderr.write('Error! Failed to open file for reading.');
        exit(1);
      } else {
        this.fd = fd;
        callback();
      }
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
