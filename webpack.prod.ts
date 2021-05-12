import {Configuration} from 'webpack';
import merge from 'webpack-merge';
import {commonConf} from './webpack.common';

const prodConf: Configuration = merge(commonConf, {
  mode: 'production'
});

export default prodConf;
