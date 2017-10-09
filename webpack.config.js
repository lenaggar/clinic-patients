/* eslint-disable */
const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = env => {
  console.log(env);

  const envConfig = require(`./build-utils/webpack.${env.env || "dev"}.js`);

  return webpackMerge(commonConfig, envConfig);
};
