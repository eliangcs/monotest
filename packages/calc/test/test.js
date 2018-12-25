const assert = require('assert');

const { addAndSubtract } = require('..');

describe('Addition', () => {
  it('Three positive integers', () => {
    assert.equal(addAndSubtract(5, 2, 3), 4);
  });

  it('Three negative integers', () => {
    assert.equal(addAndSubtract(-5, -2, -3), -4);
  });
});
