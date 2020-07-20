const webpack = require("webpack");

module.exports = {
  target: "serverless",
  webpack: config => {
    const definePlugin = new webpack.DefinePlugin({
      AUTH_PASSWORD: JSON.stringify(process.env.AUTH_PASSWORD)
    });

    config.plugins.push(definePlugin);

    return config;
  }
};
