import path from 'path';

export default {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader',}
    ]
  }
};