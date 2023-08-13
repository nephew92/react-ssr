const path = require("node:path");

const { merge } = require("webpack-merge");

const common = require('./common');

const { THEME } = process.env

module.exports = env => {
  /**
   * @type {import("webpack").Configuration}
   */
  const config = {
    target: "web",
    entry: "./src/index.jsx",
    output: {
      filename: "js/[name].bundle.js",
      path: path.resolve(__dirname, `../build/themes/${THEME}/static`),
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  }
  return merge(common(env), config)
}
