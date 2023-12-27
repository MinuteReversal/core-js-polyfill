import builder from "core-js-builder";

(async () =>
  await builder({
    // 所有需要的模块（'core-js/actual/url' 包含 URL 和 URLSearchParams：https://github.com/zloirock/core-js#url-and-urlsearchparams）
    modules: ["core-js/actual/url"],
    summary: {
      console: { size: true, modules: true },
      comment: { size: true, modules: true },
    },
    format: "bundle",
    // 打包后的目标文件名
    filename: "./dist/corejs-url.js",
  }))();
