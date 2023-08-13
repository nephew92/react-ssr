const path = require("node:path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {
  /**
   * @type {import("webpack").Configuration}
   */
  const config = {
    devtool: false,
    mode: "production",
    performance: false,
    output: {
      clean: true,
    },
    resolve: {
      alias: {
        "@Build": path.resolve(__dirname, '../build'),
        "@Server": path.resolve(__dirname, '../server'),
        "@Theme": path.resolve(__dirname, '../theme'),
      },
      extensions: ['.jsx', '.js', '.json'],
    },
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
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/main.css',
      }),
    ],
  }
  return config
}
