const { stdin, stdout, exit } = process;

module.exports = function () {
  // stdin.on('data', (data) => {
  //   if (!data) {
  //     console.log(data);
  //     exit(1);
  //   } else {
  //     stdout.write('Text to encode: ');
  //     stdout.write('Result: ');
  //     stdout.write('Result: ');
  //     process.on('SIGINT', () => {
  //       stdout.write('Приходите еще!');
  //       exit(1);
  //     });
  //   }
  //});
  // stdout.write;
  // stdout.write('Result ');
  process.on('SIGINT', () => {
    stdout.write('Удачи!'), exit(1);
  });

  stdout.on('data', (data) => {
    console.log(`Received chunk ${data}`);
  });
};
