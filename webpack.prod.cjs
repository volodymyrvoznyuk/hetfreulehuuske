const path=require("path");
const common=require ("./webpack.common.cjs");
const merge=require( "webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common,{
    mode:"production",
    devtool: 'source-map',
    output: {
        filename: ".src/index.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin(),
          new TerserPlugin(),    
          new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
            }
          })
        ]
      },
    plugins:[    new MiniCssExtractPlugin({filename:"[name].[contenthash].css"}),
    new CleanWebpackPlugin(),
     ],
    module: {
        rules:[
            {
               test: /\.css$/,
               use: [
                MiniCssExtractPlugin.loader,
                   "css-loader"
               ]
           }
        ]
    }
});
