const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};