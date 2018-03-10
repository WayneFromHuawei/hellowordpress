var assert = require('assert')

function test() {
  assert.equal(2 + 6, 8);
}

if (module == require.main) require('test').run(test);
