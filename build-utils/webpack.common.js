const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
  "react",
  "react-dom",
  "react-router",
  "react-redux",
  "redux",
  "redux-thunk",
  "redux-form"
];

const config = {
  context: commonPaths.rootPath,
  entry: {
    bundle: commonPaths.entryFilePath,
    vendor: VENDOR_LIBS
  },
  output: {
    filename: "[name].[hash].js",
    path: commonPaths.outputPath
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: "url-loader?limit=10000"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body"
    })
  ]
};

module.exports = config;
