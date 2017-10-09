/* eslint-disable */
const webpack = require("webpack");

const config = {
  entry: {
    bundle: commonPaths.entryPath,
    vendor: VENDOR_LIBS,
  },
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),
  ],
};

module.exports = config;
