const { ATransformStream } = require('../src/streams/transform_streams');

describe('transform_streams', () => {
  test('check shift', () => {
    const transformStreams = new ATransformStream();
    expect(transformStreams.shift).toBe('mirror');
  });

  //todo test('check shift', () => {
  //   const transformStreams = new ATransformStream();
  //   expect(() => {
  //     transformStreams.transform();
  //   }).toBe('mirror');
  // });
});
