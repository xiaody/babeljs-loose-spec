import test from 'ava'

test('babel template literals test fails with loose:true', function (t) {
  const obj = {
    toString () {
      return 'obj'
    },
    valueOf () {
      return 1
    }
  }

  t.is(`${obj}`, 'obj')
})
