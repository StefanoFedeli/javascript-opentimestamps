const test = require('tape');
const Utils = require('../utils.js');

test('utils.js test', assert => {
  assert.equal(Utils.randString(16).length, 16, 'Utils.randString() length');
  assert.equal(Utils.bytesToHex(Utils.hexToBytes('deadbeef')), 'deadbeef', 'Utils.hexToBytes and bytesToHex match');
  assert.equal(Utils.charsToHex(' '), '20', 'Utils.charsToHex map ok');
  assert.true(Utils.arrEq('\x000120', '\x000120'), 'arrEq is equal');
  assert.false(Utils.arrEq('\x000121', '\x000120'), 'arrEq is not equal');
  assert.end();
});
