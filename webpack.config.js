const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Document',
            template: 'src/index.html'
        })
    ]
}
