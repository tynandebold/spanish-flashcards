const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const cssPath = isProd ? "style.min.css" : "style.css";
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  devServer: {
    contentBase: "./",
    inline: true,
    port: 8888
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: isProd ? "script.min.js" : "script.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new ExtractTextPlugin(cssPath),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
