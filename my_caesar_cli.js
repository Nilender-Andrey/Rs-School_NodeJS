const validation = require('./validation');
const encryption = require('./encryption');

const flags = process.argv.slice(2);

const codingScheme = validation(flags);

let text = 'This is secret. Message about "_" symbol!';
codingScheme.forEach((element) => {
  text = encryption(text, element);
});

console.log(text);
