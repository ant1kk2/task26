const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    // target: ["web", "es5"],
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "js", "script.js"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "js/script.bundle_[fullhash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "styles/style_[fullhash].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      edge: "17",
                      chrome: "60",
                      firefox: "120",
                      safari: "17.3",
                      ie: "9"
                    },
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "/assets/images/",
              },
            },
          ],
        },
      ],
    },
    devServer: {
      port: 7777,
      static: {
        directory: path.join(__dirname, "build")
      }
    }
  };
};
