import {Configuration} from 'webpack';
import merge from 'webpack-merge';
import {distPath, commonConf} from './webpack.common';
import 'webpack-dev-server';

const devConf: Configuration = merge(commonConf, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: '/node_modules/',
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  devtool: 'source-map'
});

export default devConf;
