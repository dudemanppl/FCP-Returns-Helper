import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  treeshake: true,
  clean: true,
  target: "esnext",
  define: {
    NODE_ENV: '"production"',
  },
  splitting: false,
  sourcemap: false,
  dts: false,
  watch: process.env.WATCH === "true", // allows optional watch mode
});
