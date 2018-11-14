const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const fsRes = dir => resolve(__dirname,dir);

module.exports = {
    mode: 'none',
    entry: fsRes('src/index.js'),
    output: {
        filename: '[name].js',
        path: fsRes('dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                include: [fsRes('src')],
                exclude: /node_modules/              
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: fsRes('index.html')
        })
    ]
}
