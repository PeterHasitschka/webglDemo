var path = require("path");
var webpack = require("webpack");
const basePath = path.join(__dirname, "src");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "src/build"),
    filename: "index.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new BrowserSyncPlugin({
      port: 3000,
      open: false,
      ghostMode: false,
      ui: false,
      logLevel: "info",
      logConnections: true,
      logFileChanges: true,
      reloadDelay: 0,
      reloadDebounce: 0,
      injectChanges: true,
      logSnippet: true,
      watchOptions: {
        usePolling: true
      },
      socket: {
        domain: "localhost:3000",
        port: 3000
      },
      server: {
        baseDir: "src",
        directory: false
      },
      files: [
        `${basePath}/**/*.js`,
        `${basePath}/**/*.html`,
        `${basePath}/**/*.scss`
      ]
    })
  ],

  stats: {
    colors: true
  },
  devtool: "source-map"
};
