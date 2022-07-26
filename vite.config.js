const path = require("path");
const { defineConfig } = require("vite");
const package = require("./package.json");

module.exports = ({ mode }) => {
  return defineConfig({
    define: {
      "process.env": {
        NODE_ENV: mode,
        __NAME__: package.name,
        __VERSION__: package.version,
      },
    },
    build: {
      target: "es2015",
      lib: {
        entry: path.resolve(__dirname, "lib/main.js"),
        name: "better-cache",
        fileName: (format) => `better-cache.${format}.js`,
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
};
