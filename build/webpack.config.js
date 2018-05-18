const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve (...dir) {
  return path.resolve(__dirname, '..', ...dir)
}

module.exports = function (env) {
  let config = {
    mode: env.dev ? 'development' : 'production',
    entry: {
      main: [resolve('src/main')],
    },
    output: {
      path: resolve('dist'),
      filename: '[name].[chunkhash:6].js',
    },
    module: {
      rules: [
        {
          test: [/\.vert$/, /\.frag$/],
          use: 'raw-loader',
        }, {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          enforce: 'pre',
          options: {
            fix: true,
          },
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'CANVAS_RENDERER': JSON.stringify(true),
        'WEBGL_RENDERER': JSON.stringify(true),
      }),
      new CleanWebpackPlugin('dist', { root: resolve() }),
      new HtmlWebpackPlugin({
        template: resolve('src/index.html'),
      }),
      new CopyWebpackPlugin([{
        from: resolve('./src/assets'),
        to: resolve('./dist/assets'),
      }]),
    ],
  }

  if (env.dev) {
    config.watch = true
    config.devtool = 'cheap-source-map'
    config.plugins.push(
      new BrowserSyncWebpackPlugin({
        host: '127.0.0.1',
        port: 8888,
        server: {
          baseDir: resolve('dist'),
        },
      }),
    )
  } else {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
        },
      },
      runtimeChunk: {
        name: 'manifest',
      },
    }
  }

  return config
}
