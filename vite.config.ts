import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJs(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      entryRoot: "src",
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "components/index": resolve(__dirname, "src/components/index.ts"),
        "components/jnp-button/index": resolve(__dirname, "src/components/jnp-button/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [/^react(\/.*)?$/, /^react-dom(\/.*)?$/],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].js`,
      },
    },
  },
});
