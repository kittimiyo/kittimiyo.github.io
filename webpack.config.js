module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./index.js"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: [
          {
            loader: "react-hot-loader"
          },
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "file-loader"
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  }
};

