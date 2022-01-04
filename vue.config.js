// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
