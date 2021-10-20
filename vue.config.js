/**
 *
 * @description vue.config.js全局配置
 */
const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    };
  },
};
