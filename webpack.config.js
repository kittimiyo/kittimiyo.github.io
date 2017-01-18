module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.jsx",
    html: "./index.html"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};

