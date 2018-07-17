module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
