import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: {
    content: "src/index.ts",
  },
  outDir: "dist",
  format: ["esm"],
  target: "esnext",
  minify: !options.watch,
  minifySyntax: !options.watch,
  minifyIdentifiers: !options.watch,
  minifyWhitespace: !options.watch,
  treeshake: true,
  clean: false,
  splitting: false,
  dts: false,
}));
