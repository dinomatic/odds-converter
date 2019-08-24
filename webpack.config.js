const path = require('path')

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/js/app.ts'),
    popup: path.join(__dirname, '/src/js/popup.js')
  },
  output: {
    filename: '[name].js',
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
