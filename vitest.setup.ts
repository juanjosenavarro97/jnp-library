import "@testing-library/jest-dom/vitest";
import { afterEach, vi, expect } from "vitest";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

afterEach(() => {
  vi.clearAllMocks();
});
