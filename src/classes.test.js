import test from 'ava'

test('babel classes test fails', function (t) {
  class A {
    f () {}
  }
  t.is(Object.keys(A.prototype).length, 0)
  t.throws(function () {
    return A.call(new A())
  })
})
