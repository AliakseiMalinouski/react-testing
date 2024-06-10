const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.[contenthash].js',
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react'],
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'React testing',
            template: './src/template.html'
        }),
    ],
    devServer: {
        port: 9000,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },  
    },
}

module.exports = config;