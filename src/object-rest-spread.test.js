import test from 'ava'

test('babel object rest spread test fails with loose:true', function (t) {
  const a = { a: 1 }
  t.notThrows(function () {
    return {
      get a () {
        return 2
      },
      set a (x) {
        throw new Error('Please do not set `a`.')
      },
      ...a
    }
  })
})
