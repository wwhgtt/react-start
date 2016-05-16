"use strict";
var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index_bundle:[
            'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            './src/index.jsx'
        ]
    },
    resolve:{
        fallback: '/usr/local/lib/node_modules'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://0.0.0.0:3000/'
    },
    devtool: ['source-map'],
    module: {
        loaders: [
            {
                test: /\.jsx|js$/,
                exclude: /node_modules/,
                loaders: ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=stage-0'] // 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.sass$/,
                loaders: ['style','css?sourceMap','sass?indentedSyntax?&sourceMap&includePaths[]=./node_modules/compass-mixins/lib&includePaths[]=./src/asset/style']
            },
            {
                test: /\.png$/,
                loaders:['url?limit=8192&name=asset/img/[hash].[ext]']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({inject:'body',template: './src/helper/html-webpack-plugin-template.html'}),
        new webpack.EnvironmentPlugin(["NODE_ENV"])
    ]
};
