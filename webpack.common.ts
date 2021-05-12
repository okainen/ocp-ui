import path from 'path';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const srcPath = path.join(__dirname, 'src');
export const distPath = path.join(__dirname, 'dist');

const isDev = process.env.NODE_ENV == 'development';

const cssLoaders = (extra: string | null = null) => {
  const basicCssLoaders = [
    MiniCssExtractPlugin.loader,
    'css-modules-typescript-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          compileType: 'module',
          mode: 'local',
          auto: (filename: string) => filename.endsWith('.scss'),
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
          localIdentContext: srcPath,
          localIdentHashPrefix: 'hash'
        },
        import: true
      }
    }
  ];
  return extra ? [...basicCssLoaders, extra] : basicCssLoaders;
};

export const commonConf: Configuration = {
  context: srcPath,
  entry: './index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: distPath,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json')
      })
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [new TerserWebpackPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[contenthash].css'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
