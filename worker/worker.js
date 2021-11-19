const pipelineWorker = require('../streams/pipeline');
const input = require('../helpers/input');
const output = require('../helpers/output');
const transformsCollector = require('../helpers/transformsCollector');

module.exports = function ({
  codingScheme,
  pathToInputFile,
  pathToOutputFile,
}) {
  pipelineWorker(
    input(pathToInputFile),
    transformsCollector(codingScheme),
    output(pathToOutputFile)
  );
};
