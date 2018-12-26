import test from 'ava'

test('babel parameters test fails with loose:true', function (t) {
  function test1 (x, y = 'hello', z) {}

  t.is(test1.length, 1)
})
