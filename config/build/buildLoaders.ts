import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/buildOptions';
import { buildCssLoader } from './loader/buildCssLoader';
import { buildSvgLoader } from './loader/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = buildSvgLoader();

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoaders = buildCssLoader(isDev);

  return [typescriptLoader, cssLoaders, fileLoader, svgLoader];
}
