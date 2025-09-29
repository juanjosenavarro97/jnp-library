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
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        "jnp-button/jnp-button": "src/components/jnp-button/index.ts",
        "jnp-input/jnp-input": "src/components/jnp-input/index.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [/^react(\/.*)?$/, /^react-dom(\/.*)?$/, /^clsx$/],
      output: {
        preserveModules: false,
        entryFileNames: "components/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
