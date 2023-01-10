module.exports = {
  entry: {
    build: './src/build.js'
  },
  output: {
    filename: '[name].min.js',
  },
  mode: "production",
  module: {
    rules:[ {
      test:/\.js$/,
      use: ["babel-loader"]
    },
    {
      test: /\.css$/,
      use: ["style-loader","css-loader"]
    }
    ]
  }
}