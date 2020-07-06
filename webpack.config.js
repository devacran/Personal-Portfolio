const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    port: 9000,
    host: "192.168.0.108",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // {
      //     test: /\.css?$/,
      //     exclude: /node_modules/,
      //     use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader",
      },
      {
        test: [/\.pug/],
        exclude: [/node_modules/, /public/, /dist/],
        loaders: ["html-loader", "pug-html-loader"],
      },
      // {
      //     test: /\.html?$/i,
      //     exclude: [/node_modules/, /public/, /dist/],
      //     use: 'html-loader',
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: [/node_modules/, /public/, /dist/],
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html"),
    }),
  ],
};
