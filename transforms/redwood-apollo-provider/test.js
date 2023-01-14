'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'redwood-apollo-provider',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
