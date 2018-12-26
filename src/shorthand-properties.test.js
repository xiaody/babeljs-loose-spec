import test from 'ava'

test('babel shorthand properties test fails', function (t) {
  const obj = { f () {} }

  t.is(obj.f.prototype, undefined)
})
