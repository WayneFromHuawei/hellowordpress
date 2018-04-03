var assert = require('assert')

function test() {
  assert.equal(2 + 4, 6);
}

if (module == require.main) require('test').run(test);
