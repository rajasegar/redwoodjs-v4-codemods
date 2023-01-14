'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'router-use-auth',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
