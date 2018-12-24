const assert = require('assert');

const { add } = require('..');

describe('Addition', () => {
  it('Two positive integers', () => {
    assert.equal(add(1, 2), 3);
  });

  it('Two negative integers', () => {
    assert.equal(add(-1, -2), -3);
  });
});
