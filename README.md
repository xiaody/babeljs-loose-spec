This repo demonstrates some edge cases that could make Babel compiled code fail.

The `src` folder contains tests that could be directly excuted with `npm run test:src`,
and all of them pass (with Node.js 10).

`npm run build` compile the `src` tests to `lib` with Babel.
Use `npm run test:lib` to run the compiled tests.

Depending on the options used for Babel (`@babel/preset-env`), some compiled tests would fail:
- `{loose: false, spec: false}` (default) 3/10 fail
- `{loose: false, spec: true}` 2/10 fail
- `{loose: true, spec: false}` 10/10 fail

## Some explanation of the failures

### classes

A class must be used as constructor. The `classCallCheck` method of Babel has false negatives.

https://babeljs.io/docs/en/next/babel-plugin-transform-classes.html

### shorthand-properties

Object shorthand methods
should not have `prototype` and cannot be used as constructors.

https://github.com/babel/babel/issues/7115

### arrow-functions, spec:false (default)

Arrow functions
should not have `prototype` and cannot be used as constructors.

https://babeljs.io/docs/en/next/babel-plugin-transform-arrow-functions.html#spec

### object-rest-spread, loose:true

Should "define" properties instead of using "assign".

https://babeljs.io/docs/en/next/babel-plugin-proposal-object-rest-spread.html#loose

### computed-properties, loose:true

Should "define" properties instead of using "assign".

https://babeljs.io/docs/en/next/babel-plugin-transform-computed-properties.html#loose

### destructuring, loose:true

Loose destructuring *assumes* what you want to destructure is an array, and fails for some other types.

https://babeljs.io/docs/en/next/babel-plugin-transform-destructuring.html#loose

### parameters, loose:true

Loose parameters with default values fail to keep the function arity for performance trade-off.

https://babeljs.io/docs/en/next/babel-plugin-transform-parameters.html#loose

### for-of, loose:true

Loose for-of use a "fast path" for all arrays to achieve better performance, which would fail if the array has its own iterator defined.

https://babeljs.io/docs/en/next/babel-plugin-transform-for-of.html#loose

### template-literals, loose:true

Loose template literals use the `+` operator instead of `string.concat`, which doesn't handle some special objects well.

https://babeljs.io/docs/en/next/babel-plugin-transform-template-literals.html#loose

### spread, loose:true

Loose spread *assumes* all iterables are arrays, which you may not agree.

https://babeljs.io/docs/en/next/babel-plugin-transform-spread.html#loose
