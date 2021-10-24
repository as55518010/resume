const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

process.env.VUE_APP_TITLE = process.env.VUE_APP_TITLE || "個人履歷";

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
