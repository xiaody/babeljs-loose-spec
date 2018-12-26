import test from 'ava'

test('babel destructuring test fails with loose:true', function (t) {
  t.notThrows(function (x, y, z) {
    const [a, ...rest] = arguments
    return [a, rest]
  }.bind(null, 1, 2, 3))
})
