import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    content: "src/index.ts",
  },
  outDir: "dist",
  format: ["esm"],
  target: "esnext",
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  treeshake: true,
  clean: false,
  splitting: false,
  dts: false,
});
