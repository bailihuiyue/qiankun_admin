const packageName = require('./package.json').name;

module.exports = {
  lintOnSave: false,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  configureWebpack: {
    output: {
      library: 'qiankunsubvue',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
