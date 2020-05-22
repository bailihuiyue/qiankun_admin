const packageName = require('./package.json').name;

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: 'qiankunsubvue',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
