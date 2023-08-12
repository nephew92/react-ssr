const path = require("path");

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
        "@Components": path.resolve(__dirname, '../src/components'),
        "@Blocks": path.resolve(__dirname, '../src/blocks'),
        "@Hooks": path.resolve(__dirname, '../src/hooks'),
        "@Utils": path.resolve(__dirname, '../src/utils'),
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
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, "node_modules/bootstrap/scss")],
                },
              },
            },
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
        filename: 'main.css',
      }),
    ],
  }
  return config
}
