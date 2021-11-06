const { Transform } = require('stream');
const encryption = require('../encryption');

class myTransformStream extends Transform {
  constructor(cipher) {
    super();
    this.cipher = cipher;
  }
  _transform(chunk, encoding, callback) {
    try {
      const resultString = encryption(chunk.toString('utf8'), this.cipher);

      // const resultString = this.codingScheme.reduce(
      //   (text, item) => encryption(text, item),
      //   chunk.toString('utf8')
      // );
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = myTransformStream;
