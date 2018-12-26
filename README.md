This repo demonstrates some edge cases that could make Babel compiled code fail.

The `src` folder contains tests that could be directly excuted with `npm run test:src`,
and all of them pass (with Node.js 10).

`npm run build` compile the `src` tests to `lib` with Babel.
Use `npm run test:lib` to run the compiled tests.

Depending on the options used for Babel (`@babel/preset-env`), some compiled tests would fail:
- `{loose: false, spec: false}` (default) 3/10 fail
- `{loose: false, spec: true}` 2/10 fail
- `{loose: true, spec: false}` 10/10 fail
