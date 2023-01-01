const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("babel-loader");
module.exports = {
  target: ["web", "es5"],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.resolve(__dirname, "./public") + "/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
