const webpackMerge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack');

const config = {
    mode: 'production',
    plugins: [
        new webpack.BannerPlugin('Copyright')
    ]
};

module.exports = webpackMerge.merge(webpackConfig, config)
