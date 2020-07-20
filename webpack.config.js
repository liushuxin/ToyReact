//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  mode: "development",
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.js?$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                [
                  "@babel/plugin-transform-react-jsx",
                  { pragma: "ToyReact.createElement" },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "./template/index.html",
  //     }),
  //   ],
};
