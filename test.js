var assert = require('assert')

function test() {
  assert.equal(1 + 3, 4);
}

if (module == require.main) require('test').run(test);
