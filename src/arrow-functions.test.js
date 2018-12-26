import test from 'ava'

test('babel arrow functions test fails with spec:false (default)', function (t) {
  const A = () => ({ a: 1 })

  t.is(A.prototype, undefined)
  t.throws(function () {
    return new A()
  })
})
