const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const modules = {
  rules: [
    {
      test: /\.(js|jsx)$/i,
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
  entry: "./client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/client"),
    clean: true,
  },
  module: modules,
  plugins,
};

const serverConfig = {
  target: "node",
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
