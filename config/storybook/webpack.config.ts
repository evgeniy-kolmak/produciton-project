import { Configuration } from 'webpack';
import { BuildPaths } from '../build/types/buildOptions';
import path from 'path';
import { buildCssLoader } from '../build/loader/buildCssLoader';
import { buildSvgLoader } from '../build/loader/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
  const pathRootDir: Pick<BuildPaths, 'src'> = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(pathRootDir.src);
  config.resolve?.extensions?.push('ts', 'tsx');

  if (config?.module?.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule && typeof rule === 'object') {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
      }
      return rule;
    });
    config.module?.rules?.push(buildCssLoader(true), buildSvgLoader());

    return config;
  }
};
