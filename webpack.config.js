module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./index.jsx"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/dist/"
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
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
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
            loader: "babel-loader",
            query: {
              presets: ['es2015']
            }
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
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },

  devtool: "#inline-source-map"
};

