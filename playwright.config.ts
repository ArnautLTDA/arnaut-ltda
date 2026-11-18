import { defineConfig, devices } from "@playwright/test";
import path from "node:path";
import os from "node:os";

const localLib = path.join(os.homedir(), ".local", "lib");

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    launchOptions: {
      env: {
        ...process.env,
        LD_LIBRARY_PATH: `${localLib}:${process.env.LD_LIBRARY_PATH || ""}`,
      },
    },
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 800 },
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 7"],
      },
    },
  ],
  webServer: {
    command: "npm run start -- -p 3000",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 30 * 1000,
  },
});
