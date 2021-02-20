const webpackMerge = require('webpack-merge')
const webpackConfig = require('./webpack.config.js')

const config = {
    mode: 'development',
    devtool: 'eval-source-map'
};
module.exports = webpackMerge.merge(webpackConfig, config)
