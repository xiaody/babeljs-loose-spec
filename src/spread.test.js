import test from 'ava'

test('babel spread test fails with loose:true', function (t) {
  const a = '123'
  t.deepEqual(
    [...a, '4'],
    ['1', '2', '3', '4']
  )
})
