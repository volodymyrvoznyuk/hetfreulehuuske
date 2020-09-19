const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js"
    },

    module: {
        rules: [

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // options...
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
      
            {
                test: /\.(svg|jpg|jpeg|png|gif|jfif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    }, plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/mystyles.css'
          }),
          new CopyPlugin({
            patterns: [
              { from: './src/assets/carousel',to: './images'},
             ],
          })]
}
