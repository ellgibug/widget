const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            // minify: {
            //     collapseWhitespace: true
            // }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            // фавикон
        ]),
        new MiniCSSExtractPlugin({
            filename: "[name].[hash].css",
        })
    ],
    devServer: {
        port: 4200,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        // options: {
                        //     hmr: true,
                        //     reloadAll: true
                        // }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCSSExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                },
            }
        ]
    }
}