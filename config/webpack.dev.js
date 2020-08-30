const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["./src/main.jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../www"),
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../www"),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|eot|png|svg|jpg|jpeg|gif|ico)$/,
        use: ["file-loader"],
      },
    ],
  },
};
