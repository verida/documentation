// This seems to be how to configure webpack in docusaurus. Modified from https://githubmate.com/repo/rohit-gohri/redocusaurus/issues/57

const webpack = require('webpack');
//const dotenv = require("dotenv-webpack");

module.exports = function (context, options) {
    return {
      name: 'custom-webpack-docusaurus-plugin',
      // eslint-disable-next-line
      configureWebpack(config, isServer, utils) {
        return {
          resolve: {
            alias: {
              process: "process/browser"
            },
            fallback: {
                path: require.resolve('path-browserify'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                util: require.resolve("util/"),
            },
          },
          plugins: [
              new webpack.ProvidePlugin({
                  process: 'process/browser',
              }),
              // new dotenv(),
              new webpack.ProvidePlugin({
                Buffer: [require.resolve("buffer/"), "Buffer"], // yes the '/' at the end is deliberate. See https://www.npmjs.com/package/buffer#usage
              }),
            ],
          devtool: "source-map",
        };
      },
    };
}