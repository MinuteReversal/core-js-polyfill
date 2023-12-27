import terser from "terser";
import fs from "fs";

(() => {
  const code = fs.readFileSync("./dist/corejs-url.js", "utf-8");
  const result = terser.minify(code);
  fs.writeFileSync("./dist/corejs-url.min.js", result.code);
})();
