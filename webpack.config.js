const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry : './src/index.js',
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'docs'),
    },
      

    module : {
        rules : [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.vue$/ ,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ]
};
