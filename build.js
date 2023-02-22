const { build } = require("esbuild");

const pkg = require("./package.json");
const dep = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

build({
  entryPoints: ["lib/index.ts"],
  platform: "node",
  bundle: true,
  format: "cjs",
  external: Object.keys(dep),
  outfile: "cjs/index.js",
  minify: true,
  sourcemap: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
}).catch(() => process.exit(1));

build({
  platform: "node",
  entryPoints: ["lib/index.ts"],
  bundle: true,
  format: "esm",
  external: Object.keys(dep),
  outfile: "esm/index.js",
  minify: true,
  sourcemap: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
}).catch(() => process.exit(1));
