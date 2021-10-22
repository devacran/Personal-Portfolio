const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    host: "0.0.0.0",
    port: "3000"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: [/\.pug/],
        exclude: [/node_modules/, /public/, /dist/],
        loaders: ["html-loader", "pug-html-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|svg|ttf|woff|woff2)$/i,
        exclude: [/node_modules/, /public/, /dist/],
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html")
    })
  ]
};
