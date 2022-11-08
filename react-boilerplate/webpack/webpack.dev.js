/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 'auto',
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
