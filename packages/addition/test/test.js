const assert = require('assert');

const { add } = require('..');

describe('Addition', () => {
  it('Two positive integers', () => {
    assert.equal(add(1, 2), 3);
  });

  it('Two negative integers', () => {
    assert.equal(add(-1, -2), -3);
  });

  it('Two floats', () => {
    assert.equal(add(1.0, 2.0), 3.0);
  });
});
