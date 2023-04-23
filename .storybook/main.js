const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config, {
    configType
  }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", {
            flow: false,
            typescript: true
          }]]
        }
      }]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  typescript: {
    reactDocgen: false
  },
  core: {
    builder: "webpack5"
  },
  framework: "@storybook/react"
};