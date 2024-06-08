const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

module.exports = config;