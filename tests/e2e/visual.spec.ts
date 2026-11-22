import { expect, test } from "@playwright/test";

test.describe("visual regression @visual", () => {
  test.skip(!process.env.VISUAL, "Run with VISUAL=1 on a machine with a stable GPU baseline.");

  test("default globe", async ({ page }) => {
    await page.goto("/#c=silk-road&y=-128&cam=75,5,3.3");
    await page.waitForTimeout(8000);
    await expect(page).toHaveScreenshot("globe-oblique.png", { maxDiffPixelRatio: 0.03 });
  });
});
