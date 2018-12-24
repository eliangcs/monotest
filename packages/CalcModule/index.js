const additionModule = require('AdditionModule');
const subtractionModule = require('SubtractionModule');

const addAndSubtract = (a, b, c) =>
  subtractionModule.subtract(additionModule.add(a, b), c);

module.exports = { addAndSubtract };
