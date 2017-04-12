var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['jquery', 'velocity-animate'],
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: './public/js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      chunks: ['app', 'app2'],
      minChunks: Infinity,
    }),
  ],
};
