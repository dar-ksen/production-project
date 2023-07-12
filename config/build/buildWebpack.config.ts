import webpack from 'webpack';
import { IBuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoader';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const {paths, mode} = options;
  return  {
    mode,
    entry: paths.entry,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
  }

}