const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = env => {
  const envConfig = require(`./build-utils/webpack.${env.env || "dev"}.js`);

  return webpackMerge(commonConfig, envConfig);
};

// module.exports = {
//   entry: "./src/index.jsx",
//   output: {
//     filename: "test_test_test.js",
//     path: "/dist"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/
//       }
//     ]
//   }
// };
