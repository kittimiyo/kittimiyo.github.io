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
      -       loaders: [
  +       use: [
  {
    loader: "style-loader"
  },
  {
    loader: "css-loader",
  -           query: {
  +           options: {
    modules: true
  }
}
]
},
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

