const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options:vueloaderOptions(isDev),
        exclude:/node_modules/
      },
    ],
  },
  
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
}