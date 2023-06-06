// COMMONJS MODULE SYSTEM
const path = require("path");

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
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
};
