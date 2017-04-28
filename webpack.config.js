var webpack = require('webpack');

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
    path: './public/js',
    jsonpFunction: 'vendor',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app', 'app2'],
      // Infinityを指定すると、エントリーポイントに記述したモジュール以外はバンドルされない
      minChunks: Infinity,
    }),
  ],
};
