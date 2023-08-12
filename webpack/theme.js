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
      filename: "js/bundle.js",
      path: path.resolve(__dirname, `../build/themes/${THEME}/static`),
    },
  }
  return merge(common(env), config)
}
