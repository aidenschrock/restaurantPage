const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    contentBase: 'src',
    watchContentBase: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",

          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ]
      }]
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false
    }
  }
}