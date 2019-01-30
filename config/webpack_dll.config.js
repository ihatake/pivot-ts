const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const paths = require('./paths');
module.exports = {
  entry: {
    react: ['react', 'react-dom', 'react-loadable', 'react-router-dom', 'mobx', 'mobx-react'],
    // polyfill: ['core-js/fn/object/assign', 'core-js/fn/promise', 'whatwg-fetch'],
  },
  output: {
    filename: 'dll/[name].dll.js',
    path: paths.appPublic,
    library: '_dll_[name]',
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(paths.appPublic, 'dll/[name].manifest.json'),
    }),
  ],
};