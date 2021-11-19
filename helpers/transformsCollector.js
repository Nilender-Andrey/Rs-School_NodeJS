const {
  CTransformStream,
  RTransformStream,
  ATransformStream,
} = require('../streams/transform_streams');

module.exports = function (codingScheme) {
  return codingScheme.map((item) => {
    switch (item) {
      case 'C1':
      case 'C0':
        return new CTransformStream(item);

      case 'R1':
      case 'R0':
        return new RTransformStream(item);

      case 'A':
      default:
        return new ATransformStream();
    }
  });
};
