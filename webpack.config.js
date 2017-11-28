const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    // エントリーポイント名はCommonsChunkPluginのnameと同じものを指定
    // バンドルしたい共通のモジュールのみを記述
    vendor: ['jquery', 'velocity-animate'],
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public/js'),
    jsonpFunction: 'vendor',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app', 'app2'],
      // Infinityを指定すると、エントリーポイントに記述したモジュール以外はバンドルされない
      // 今回の場合jqueryとvelocity-animateのみがバンドルされる
      minChunks: Infinity,
    }),
  ],
};
