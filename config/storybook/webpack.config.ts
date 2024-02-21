import { Configuration } from 'webpack';
import { BuildPaths } from '../build/types/buildOptions';
import path from 'path';
import { buildCssLoader } from '../build/loader/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
  const pathRootDir: Pick<BuildPaths, 'src'> = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(pathRootDir.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
