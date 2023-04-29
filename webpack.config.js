

const path = require('path');
const idProduction = process.env.NODE_ENV === 'production';
const EslitWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/main.jsx',

    entry: {
        main: ['webpack-hot-middleware/client', './src/main.jsx']
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module:{
        rules: [
            // $ end with
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.s[ac]ss $/,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // webpack 5 using assets modules
                // use: 'file-loader' // webpack 4 using loader
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
                use:[{
                    loader: 'babel-loader',
                    options:{
                        cacheDirectory: true,
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    }
                }]
            },
        ],
    },

    plugins: [
        new EslitWebpackPlugin({
            context: path.resolve(__dirname, 'src'),
            exclude: 'node_modules',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    mode: idProduction ? 'production' : 'development',

    devtool: 'cheap-module-source-map',

    resolve:{extensions: ['.tsx', '.ts','.jsx', '.js', '.json']},

    // devServer:{
    //     host:'localhost',
    //     port:'3000',
    //     historyApiFallback: true,
    //     open: true,
    //     hot: true,
    // }
}