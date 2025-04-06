import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    sequence: {
      shuffle: false,
    },
    hideSkippedTests: true,
    onStackTrace: () => false,
  },
});
