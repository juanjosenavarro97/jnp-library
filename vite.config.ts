import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist",
      entryRoot: "src",
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        index: "src/index.ts",
        components: "src/components/index.ts",
        "components/jnp-button": "src/components/jnp-button/index.ts",
        "components/jnp-input": "src/components/jnp-input/index.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [/^react(\/.*)?$/, /^react-dom(\/.*)?$/, /^clsx$/],
      output: {
        preserveModules: false,
        entryFileNames: ({ name }) =>
          name === "index" ? "[name].js" : `${name}/index.js`,
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
  },
});
