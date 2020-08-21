const path=require("path");
const common=require ("./webpack.common.cjs");
const merge=require( "webpack-merge");

module.exports = merge(common,{
    mode:"development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
               test: /\.css$/,
               use: [
                   "style-loader",
                   "css-loader"
               ]
           }
        ]
    }
});
