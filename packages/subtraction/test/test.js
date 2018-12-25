const assert = require('assert');

const { subtract } = require('..');

describe('Subtraction', () => {
  it('Two positive integers', () => {
    assert.equal(subtract(3, 1), 2);
  });

  it('Two negative integers', () => {
    assert.equal(subtract(-3, -1), -2);
  });
});
