const webpack = require('webpack');
const path = require('path');

const AutoDllPlugin = require('autodll-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const WebpackS3Plugin = require('webpack-s3-plugin');

const version = require('./package.json').version;

const IS_CI = Boolean(process.env.CI || false);
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const DIR_CLIENT = path.resolve(__dirname, 'src', 'client');
const DIR_VENDOR = path.resolve(__dirname, 'src', 'vendor');
const DIR_TYPES = path.resolve(__dirname, 'src', '@types');
const DIR_OUTPUT = path.resolve(__dirname, 'build');

const publicPath = DEVELOPMENT
  ? `${process.env.ASSETS_CDN_URL}`
  : `${process.env.ASSETS_CDN_URL}${version}/`;

const config = {
  entry: {
    client: path.join(DIR_CLIENT, 'index.tsx'),
  },

  output: {
    path: DIR_OUTPUT,
    filename: DEVELOPMENT ? '[name].js' : '[name].[hash].js',
    publicPath: publicPath,
  },

  target: 'web',

  mode: DEVELOPMENT ? 'development' : 'production',

  devtool: "#source-map",

  devServer: {
    port: process.env.PORT_ASSETS,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: './build',
    publicPath: '/',
    quiet: false,
    noInfo: false,
    clientLogLevel: 'none',
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    writeToDisk: true
  },

  optimization: {
    minimize: !DEVELOPMENT,
    minimizer: [new TerserPlugin()],
  },

  watch: DEVELOPMENT,
  watchOptions: {
    poll: 1000
  },

  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: false
    }),

    new GitRevisionPlugin(),

    new MiniCssExtractPlugin({
      filename: DEVELOPMENT ? '[name].css' : '[name].[hash].css',
    }),

    new AutoDllPlugin({
      debug: DEVELOPMENT,
      context: __dirname,
      filename: DEVELOPMENT ? '[name].js' : '[name].[contenthash].js',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'react-redux',
          'react-router',
          'react-router-dom',
          'react-transition-group',
          'cross-fetch',
          'classnames',
          'debug',
          'history',
          'lodash',
          'qs',
          '@paralleldrive/react-feature-toggles',
          '@reduxjs/toolkit'
        ]
      },
    }),

    new WebpackManifestPlugin({
      writeToFileEmit: true,
      map: (file) => {
        file.name = file.path
          .replace(publicPath, '')
          .replace(/\.[a-f0-9]{20,}\./, '.');
        return file;
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use:[
          {
            loader: "awesome-typescript-loader",
            options : {
              reportFiles: [
                path.join(DIR_CLIENT, '**/*.{ts,tsx}')
              ]
            }
          }
        ]
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },

      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'style-loader',
          },
          'css-loader',
        ],
      },

      {
        test: /\.scss$/,
        include: [
          DIR_CLIENT + '/components/',
          DIR_CLIENT + '/styles/',
        ],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:3]',
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [AutoPrefixer({remove: false})],
            }
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },

      {
        test: /\.(mp4|eot|ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: DEVELOPMENT ? '[name].[ext]' : '[name].[hash].[ext]',
        }
      },

      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  }
};

if (!DEVELOPMENT && IS_CI) {
  const s3Options = {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    region: 'us-east-1'
  };
  const s3UploadOptions = {
    Bucket: process.env.AWS_S3_BUCKET,
    CacheControl: 'max-age=315360000, no-transform, public',
  };
  config.plugins = config.plugins.concat([
    new WebpackS3Plugin({
      s3Options,
      s3UploadOptions,
      basePath: `prod/${version}`,
    }),
    new WebpackS3Plugin({
      s3Options,
      s3UploadOptions,
      basePath: `prod/latest`,
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.AWS_CLOUDFRONT_DIST_ID,
        Items: ["/latest/*"]
      }
    })
  ]);
}

module.exports = config;
