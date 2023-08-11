const path = require("path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");

const common = require('./common');

module.exports = env => {
  /**
   * @type {import("webpack").Configuration}
   */
  const config = {
    target: "web",
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../build/client"),
      clean: true,
    },
    performance: false,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },
  }
  return merge(common(env), config)
}
