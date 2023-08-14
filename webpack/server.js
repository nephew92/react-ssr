const path = require("node:path");

const { merge } = require("webpack-merge");
const nodeExternals = require('webpack-node-externals');

const common = require('./common');

module.exports = env => {
  /**
   * @type {import("webpack").Configuration}
   */
  const config = {
    target: "node",
    externalsPresets: { node: true },
    externals: [nodeExternals({
      allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    })],
    entry: "./server/entry.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../build/server"),
    },
  }
  return merge(common(env), config)
}
