import { Configuration } from "webpack";
import { BuildOptions } from "./types/buildOptions";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolver } from "./buildResolver";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "bundle.[hash].js",
      clean: true,
    },

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(options),
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
