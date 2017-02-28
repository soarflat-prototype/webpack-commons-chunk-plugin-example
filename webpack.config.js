var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: {
    vendor: ['jquery', 'velocity-animate'],
    app: './src/js/app.js',
    app2: './src/js/app2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: './public/js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      velocity: 'velocity-animate'
    })
  ]
};
