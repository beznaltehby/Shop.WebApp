'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      inline: true,
      proxy: {
        '/api': {
            target: 'http://raccoondev.tk/api',
            pathRewrite: {'^/api' : ''}
        },
        '/static': {
            target: 'http://raccoondev.tk/static',
            pathRewrite: {'^/static' : ''}
        }
      }   
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};
