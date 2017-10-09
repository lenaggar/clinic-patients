/* eslint-disable */
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
  "redux-form",
];

const config = {
  entry: {
    bundle: commonPaths.entryPath,
    vendor: VENDOR_LIBS,
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: commonPaths.outputPath,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
    }),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        use: "babel-loader",
        test: "/.jsx?$/",
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: "/.css$/",
      },
    ],
  },
};

module.exports = config;
