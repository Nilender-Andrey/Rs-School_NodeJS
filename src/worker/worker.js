const pipelineWorker = require('../streams/pipeline_worker');
const input = require('../helpers/input');
const output = require('../helpers/output');
const transformsCollector = require('../helpers/transforms_collector');

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
