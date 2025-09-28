import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "visual-tests",
  fullyParallel: true,
  reporter: [
    ["html", { open: "never", outputFolder: "visual-tests/__results__" }],
  ],
  snapshotPathTemplate:
    "{testDir}/__screenshots__{/projectName}/{testFilePath}/{arg}{ext}",
  outputDir: "visual-tests/__results__",
  use: {
    baseURL: "http://localhost:3000",
    screenshot: "only-on-failure",
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    },
  },
  projects: [
    {
      name: "Mobile 320x480",
      use: { viewport: { width: 320, height: 480 } },
    },
    {
      name: "Mobile 375x667",
      use: { viewport: { width: 375, height: 667 } },
    },
    {
      name: "Mobile 414x896",
      use: { viewport: { width: 414, height: 896 } },
    },

    // 📲 Tablets
    {
      name: "Tablet 768x1024",
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "Tablet 1024x768",
      use: { viewport: { width: 1024, height: 768 } },
    },

    // 💻 Escritorio
    {
      name: "Desktop 1366x768",
      use: { viewport: { width: 1366, height: 768 } },
    },
    {
      name: "Desktop 1440x900",
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: "Desktop 1920x1080",
      use: { viewport: { width: 1920, height: 1080 } },
    },
  ],
});
