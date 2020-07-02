const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Rules",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    // To strip all locales except “en”
    new MomentLocalesPlugin(),
    // Or: To strip all locales except “en”, “es-us” and “ru”
    // (“en” is built into Moment and can’t be removed)
    new MomentLocalesPlugin({
      localesToKeep: ["es-us", "ru"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
            esModule: false,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
};
