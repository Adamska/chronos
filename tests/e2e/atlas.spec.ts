import { type Page, expect, test } from "@playwright/test";

async function openAtlas(page: Page, path = "/") {
  await page.goto(path);
  await expect(page.getByRole("heading", { level: 1 })).not.toBeEmpty();
}

test.describe("atlas", () => {
  test("loads the default chronicle with its timeline", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("canvas")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Silk Road");
    await expect(page.getByRole("slider", { name: "Campaign timeline" })).toBeVisible();
  });

  test("opens a dossier from a timeline tick", async ({ page }) => {
    await openAtlas(page);
    await page.locator('button[title*="Zhang Qian"]').click();
    await expect(page.locator("aside h2").first()).toContainText("Zhang Qian");
  });

  test("switches chronicles from the palette", async ({ page }) => {
    await openAtlas(page);
    await page.keyboard.press("ControlOrMeta+k");
    await page.getByRole("dialog").locator("input").fill("zheng he");
    await page.getByRole("dialog").getByRole("button", { name: /Treasure Fleets/ }).first().click();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Zheng He");
  });

  test("restores a shared view from the URL", async ({ page }) => {
    await page.goto("/?c=age-of-sail&y=1500");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Age of Sail");
  });

  test("plays a round of the why-here challenge", async ({ page }) => {
    await openAtlas(page);
    await page.getByRole("button", { name: "Why here? challenge" }).filter({ visible: true }).first().click();
    await expect(page.getByText("Click the globe where you think this happened.")).toBeVisible();
    await page.waitForTimeout(2500);
    const canvas = page.locator("canvas");
    const box = await canvas.boundingBox();
    if (!box) throw new Error("canvas not laid out");
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await expect(page.getByText(/points/)).toBeVisible();
  });

  test("renders a printable classroom sheet", async ({ page }) => {
    await page.goto("/classroom/thread-plague");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Plague");
    await expect(page.getByRole("button", { name: "Print this sheet" })).toBeVisible();
  });
});

test.describe("api", () => {
  test("answers chronicle requests offline", async ({ request }) => {
    const response = await request.post("/api/chronicle", { data: { query: "Voyages of Zheng He" } });
    expect(response.ok()).toBe(true);
    const body = (await response.json()) as { campaign: { id: string } };
    expect(body.campaign.id).toBe("journey-zheng-he");
  });

  test("rejects malformed chronicle requests", async ({ request }) => {
    const response = await request.post("/api/chronicle", { data: { query: "x" } });
    expect(response.status()).toBe(400);
  });
});
