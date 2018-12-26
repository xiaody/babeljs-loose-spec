import test from 'ava'

test('babel for of test fails with loose:true', function (t) {
  // An array literal makes babeljs put for...of on
  // a "fast" path, which defeats the demonstration purpose
  // here and makes this test always fail.
  // So use a concat call.
  const array = [1, 2].concat(3)
  array[Symbol.iterator] = function * values () {
    yield 4
    yield 5
  }

  const copy = []
  for (const val of array) {
    copy.push(val)
  }

  t.deepEqual(copy, [4, 5])
})
