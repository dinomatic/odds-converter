const path = require('path')

module.exports = {
  entry: path.join(__dirname, '/src/app.ts'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/assets')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
