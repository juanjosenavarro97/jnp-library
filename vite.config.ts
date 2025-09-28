import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import fs from "fs";
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
      entry: getComponentEntries(),
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

function getComponentEntries() {
  const componentsDir = resolve(__dirname, "src/components");
  const entries: Record<string, string> = {};

  fs.readdirSync(componentsDir).forEach((dirName) => {
    const fullPath = resolve(componentsDir, dirName);

    if (fs.statSync(fullPath).isDirectory()) {
      const indexFile = resolve(fullPath, "index.ts");
      if (fs.existsSync(indexFile)) {
        entries[`components/${dirName}/index`] = indexFile;
      }
    }
  });

  entries["index"] = resolve(__dirname, "src/index.ts");
  entries["components/index"] = resolve(__dirname, "src/components/index.ts");

  return entries;
}
