const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/app.js',
    app2: './src/js/app2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: './public/js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
  ],
};
