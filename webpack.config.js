module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./index.js"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
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
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  }
};

