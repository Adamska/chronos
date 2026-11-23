import { type Page, expect, test } from "@playwright/test";

async function openApp(page: Page, path = "/en") {
  await page.addInitScript(() => window.localStorage.setItem("chronos.landing.seen", "1"));
  await page.goto(path);
}

async function openStory(page: Page, path = "/en") {
  await openApp(page, path);
  await expect(page.getByRole("heading", { level: 1 })).not.toBeEmpty();
}

test.describe("stories", () => {
  test("opens the default story on its first step", async ({ page }) => {
    await openStory(page);
    await expect(page.locator("canvas")).toBeVisible();
    await expect(page.getByRole("tab", { name: "Stories" })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByText(/^Step 1 of \d+/)).toBeVisible();
  });

  test("moves through the steps", async ({ page }) => {
    await openStory(page);
    await page.getByRole("button", { name: "Next step" }).click();
    await expect(page.getByText(/^Step 2 of \d+/)).toBeVisible();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByText(/^Step 3 of \d+/)).toBeVisible();
    await page.getByRole("button", { name: "Previous step" }).click();
    await expect(page.getByText(/^Step 2 of \d+/)).toBeVisible();
  });

  test("opens the dossier of the step's main event", async ({ page }) => {
    await openStory(page);
    await page.getByRole("button", { name: "Learn more about this event" }).click();
    await expect(page.locator("aside h2").first()).not.toBeEmpty();
  });

  test("shows a key figure and their life on the map", async ({ page }) => {
    await openStory(page, "/en?c=revolution-napoleon&s=6");
    await page.locator("section button[aria-pressed]").first().click();
    await expect(page.getByText("Life on the map")).toBeVisible();
  });

  test("restores a shared step from the URL", async ({ page }) => {
    await openStory(page, "/en?c=age-of-sail&s=3");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Age of Sail");
    await expect(page.getByText(/^Step 3 of \d+/)).toBeVisible();
  });

  test("finds a story, a person and a year from the search", async ({ page }) => {
    await openStory(page);
    await page.keyboard.press("ControlOrMeta+k");
    await page.getByRole("dialog").locator("input").fill("zheng he");
    await page.getByRole("dialog").getByRole("button", { name: /Treasure Fleets/ }).first().click();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Zheng He");
    await page.keyboard.press("ControlOrMeta+k");
    await page.getByRole("dialog").locator("input").fill("1789");
    await page.getByRole("dialog").getByRole("button", { name: /The world in 1789/ }).click();
    await expect(page.getByRole("tab", { name: "Atlas" })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("slider", { name: "Year" })).toHaveAttribute("aria-valuenow", "1789");
  });
});

test.describe("atlas", () => {
  test("switches base maps and shows a legend", async ({ page }) => {
    await openApp(page, "/en?m=atlas&y=1200");
    await expect(page.getByRole("region", { name: "Map layers" })).toBeVisible();
    await page.getByRole("radio", { name: /Dominant religions/ }).click();
    await expect(page.getByText(/Majority religion of each modern country/)).toBeVisible();
    await page.getByRole("radio", { name: /Population density/ }).click();
    await expect(page.getByText(/People per km²/)).toBeVisible();
  });

  test("answers what was here when the globe is clicked", async ({ page }) => {
    await openApp(page, "/en?m=atlas&y=1500");
    await expect(page.getByRole("region", { name: "Map layers" })).toBeVisible();
    await page.waitForTimeout(2500);
    const box = await page.locator("canvas").boundingBox();
    if (!box) throw new Error("canvas not laid out");
    await page.mouse.click(box.x + box.width * 0.58, box.y + box.height * 0.45);
    await expect(page.getByText("What was here?")).toBeVisible();
  });

  test("moves the year with the keyboard", async ({ page }) => {
    await openApp(page, "/en?m=atlas&y=1000");
    const slider = page.getByRole("slider", { name: "Year" });
    await slider.focus();
    await page.keyboard.press("ArrowRight");
    await expect(slider).toHaveAttribute("aria-valuenow", "1010");
  });
});

test("renders the app in French", async ({ page }) => {
  await openStory(page, "/fr");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("tab", { name: "Récits" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText(/^Étape 1 sur \d+/)).toBeVisible();
});

test("redirects bare paths to a locale", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/(en|fr)$/);
});

test("offers stories and the atlas on a first visit", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("dialog", { name: "Welcome to Chronos" })).toBeVisible();
  await page.getByRole("button", { name: /Explore the atlas/ }).click();
  await expect(page.getByRole("dialog", { name: "Welcome to Chronos" })).toBeHidden();
  await expect(page.getByRole("tab", { name: "Atlas" })).toHaveAttribute("aria-selected", "true");
});

test("renders an open graph image for a story", async ({ request }) => {
  const response = await request.get("/api/og?c=silk-road&y=-128");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("image/png");
});
