import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/buildOptions";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: new RegExp(".module"),
            localIdentName: isDev
              ? "[local]__[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptLoader, cssLoaders];
}
