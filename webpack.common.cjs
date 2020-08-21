const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: {
        main : "./src/index.js"
    },
    plugins : [
        new HtmlWebpackPlugin({ 
            template: './src/index.html'
          })    ],
    module: {
     rules:[      
        {
            test: /\.html$/,
            use: [
                "html-loader"
            ]
        },
        {
            test: /\.(svg|jpg|jpeg|png|gif|jfif)$/,
            use: { 
                loader:  "file-loader", 
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
             }            
        }
     ]
    }
}
