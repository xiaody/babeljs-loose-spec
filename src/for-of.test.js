import test from 'ava'

test('babel for of test fails', function (t) {
  const array = [1, 2, 3]
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
