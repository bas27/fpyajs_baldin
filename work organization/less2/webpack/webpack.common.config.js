const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                  },
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, 'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
            
        }),
        new MiniCSSExtractPlugin()
    ]
}