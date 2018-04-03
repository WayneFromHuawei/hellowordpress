var assert = require('assert')

function test() {
  assert.equal(3 + 4, 7);
}

if (module == require.main) require('test').run(test);
