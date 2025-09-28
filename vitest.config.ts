import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    environment: "happy-dom",
    include: ["src/**/*.test.{ts,tsx}"],
    reporters: ["dot", "github-actions"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["**/index.ts", "**/*.d.ts", "**/*.stories.ts"],
      thresholds: {
        "100": true,
      },
    },
  },
});
