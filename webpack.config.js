const path = require("path")

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    filename: "bundled.js", // main is the name of our bundle file
    path: path.resolve(__dirname, "app") /* __dirname is a variable that stores the absolute path of this directory */,
  },
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // exclude node modules from the bundle file
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]],
          },
        },
      },
    ],
  },
}
