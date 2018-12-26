import test from 'ava'

test('babel computed properties test fails with loose:true', function (t) {
  t.notThrows(function () {
    const key = 'a'
    return {
      get a () {
        return 2
      },
      set a (x) {
        throw new Error('Please do not set `a`.')
      },
      [key]: 1
    }
  })
})
