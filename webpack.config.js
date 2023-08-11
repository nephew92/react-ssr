const path = require("path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const modules = {
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
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'main.css',
  }),
]

const clientConfig = {
  target: "web",
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  entry: "./client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/client"),
    clean: true,
  },
  module: modules,
  plugins,
  performance: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};

const serverConfig = {
  target: "node",
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  externals: nodeExternals({
    allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  }),
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/server"),
    clean: true,
  },
  module: modules,
  plugins,
};

module.exports = [clientConfig, serverConfig];
