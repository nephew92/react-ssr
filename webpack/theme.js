const path = require("path");

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
    },
  }
  return merge(common(env), config)
}
