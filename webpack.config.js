const path = require("node:path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactServerWebpackPlugin = require('react-server-dom-webpack/plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { webpack } = require("webpack");
const { merge } = require("webpack-merge");

const alias = require('./aliases');

const { THEMES, NODE_ENV } = process.env

const isProduction = NODE_ENV === 'production'

const resolve = {
  alias,
  extensions: [
    ".jsx",
    ".js",
    ".json",
  ],
}

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  devtool: isProduction ? false : 'source-map',
  mode: NODE_ENV,
  performance: false,
  target: "web",
  entry: "./client/entry.jsx",
  output: {
    filename: "js/[name].bundle.js",
    clean: true,
  },
  resolve,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
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
  plugins: [
    new ReactServerWebpackPlugin({ isServer: false }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
}

function stats(err, stats) {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return process.exit(1);
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.log('Finished running webpack with errors.');
    info.errors.forEach(e => console.error(e));
    process.exit(1);
  } else {
    console.log('Finished running webpack.');
  }
}

if (THEMES) {
  for (const THEME of THEMES.split(',')) {
    webpack(merge(config, {
      output: {
        path: path.resolve(__dirname, `./build/themes/${THEME}/static`),
      },
    }), stats)
  }
}

module.exports = { resolve }
