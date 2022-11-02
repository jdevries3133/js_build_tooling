const path = require("path");
const tsLoader = require("ts-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // this tells webpack to treat these extensions as optional, so that you can
  // import from 'foo' instead of from 'foo.ts'
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
