import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    content: "src/index.ts", // becomes dist/public/content.js
  },
  outDir: "dist/public",
  format: ["esm"],
  target: "esnext",
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  treeshake: true,
  clean: false, // don't wipe manifest.json
  splitting: false,
  dts: false,
});
