// COMMONJS MODULE SYSTEM
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // style-loader, css-loader
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   use : "ts-loader"
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
};
