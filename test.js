var assert = require('assert')

function test() {
  assert.equal(1 + 2, 3);
}

if (module == require.main) require('test').run(test);
