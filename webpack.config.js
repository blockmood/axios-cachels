const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: path.join(__dirname, "example/src/index.js"),
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
   use: "babel-loader",
   exclude: /node_modules/
 }]
},
 plugins: [
 	new HtmlWebpackPlugin({
 		template:'./example/index.html'
 	})
 ],
 devServer: {
   port: 3001
 }
};