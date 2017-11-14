const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        // other vue-loader options go here
        },
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@components': path.resolve(__dirname, '../../src/components'),
      '@events': path.resolve(__dirname, '../../src/events'),
      '@services': path.resolve(__dirname, '../../src/services'),
      '@plugins': path.resolve(__dirname, '../../src/plugins'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
