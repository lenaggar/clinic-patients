const webpack = require("webpack");

const config = {
  devtool: "cheap-eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
