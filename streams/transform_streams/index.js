const { Transform } = require('stream');
const encode = require('../../encryption/index');

class ATransformStream extends Transform {
  constructor() {
    super();
    this.shift = 'mirror';
  }
  _transform(chunk, encoding, callback) {
    try {
      const resultString = encode(chunk.toString('utf8'), this.shift);

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

class CTransformStream extends ATransformStream {
  constructor(cipher) {
    super();
    this.shift = cipher === 'C1' ? 1 : -1;
  }
}
class RTransformStream extends ATransformStream {
  constructor(cipher) {
    super();
    this.shift = cipher === 'R1' ? 8 : -8;
  }
}

module.exports = { CTransformStream, RTransformStream, ATransformStream };
