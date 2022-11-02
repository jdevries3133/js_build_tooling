const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
     new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" },
      ],
    }),
  ]
};
