const merge = require('webpack-merge');
const DllPlugin = require('webpack/lib/DllPlugin');
const path = require('path');
const DllPluginConfig = require('./webpack_dll.config');
const paths = require('./paths.js');

const webpackConfig = merge(DllPluginConfig, {
  output: {
    path: paths.appPublic,
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(paths.appPublic, '[name].manifest.json'),
    }),
  ]
})
module.exports = webpackConfig;