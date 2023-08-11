const path = require("path");

const { merge } = require("webpack-merge");
const nodeExternals = require('webpack-node-externals');

const common = require('./common');

module.exports = env => {
  /**
   * @type {import("webpack").Configuration}
   */
  const config = {
    target: "node",
    externals: nodeExternals({
      allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    }),
    entry: "./server/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../build/server"),
      clean: true,
    },
  }
  return merge(common(env), config)
}
