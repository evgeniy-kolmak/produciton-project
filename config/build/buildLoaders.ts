import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/buildOptions';
import { buildCssLoader } from './loader/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoaders = buildCssLoader(isDev);

  return [typescriptLoader, cssLoaders, fileLoader, svgLoader];
}
