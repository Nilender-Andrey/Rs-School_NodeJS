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
    fs.open(path.join(__dirname, '..', this.pathFile), 'a', (err, fd) => {
      if (err) {
        stderr.write('Ошибка! Не удалось открыть файл для записи.');
        exit(1);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk + '\n', callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => {
        callback(er || err);
      });
    } else {
      callback(err);
    }
  }
}

module.exports = myWritingStream;
