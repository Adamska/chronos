import { type Page, expect, test } from "@playwright/test";

async function openAtlas(page: Page, path = "/en") {
  await page.addInitScript(() => window.localStorage.setItem("chronos.landing.seen", "1"));
  await page.goto(path);
  await expect(page.getByRole("heading", { level: 1 })).not.toBeEmpty();
}

async function openTool(page: Page, group: string, item: string) {
  await page.getByRole("button", { name: group }).filter({ visible: true }).first().click();
  await page.getByRole("menuitemcheckbox", { name: item }).click();
}

test.describe("atlas", () => {
  test("loads the default chronicle with its timeline", async ({ page }) => {
    await openAtlas(page);
    await expect(page.locator("canvas")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Silk Road");
    await expect(page.getByRole("slider", { name: "Campaign timeline" })).toBeVisible();
  });

  test("opens a dossier from a timeline tick", async ({ page }) => {
    await openAtlas(page);
    await page.getByRole("button", { name: /Zhang Qian/ }).first().click();
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
    await openAtlas(page, "/en?c=age-of-sail&y=1500");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Age of Sail");
  });

  test("plays a round of the why-here challenge", async ({ page }) => {
    await openAtlas(page);
    await openTool(page, "Modes", "Why here? challenge");
    await expect(page.getByText("Click the globe where you think this happened.")).toBeVisible();
    await page.waitForTimeout(2500);
    const canvas = page.locator("canvas");
    const box = await canvas.boundingBox();
    if (!box) throw new Error("canvas not laid out");
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await expect(page.getByText(/points/)).toBeVisible();
  });

  test("renders a printable classroom sheet", async ({ page }) => {
    await page.goto("/en/classroom/thread-plague");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Plague");
    await expect(page.getByRole("button", { name: "Print this sheet" })).toBeVisible();
  });

  test("renders the atlas in French", async ({ page }) => {
    await openAtlas(page, "/fr");
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("La route de la soie");
    await expect(page.getByRole("button", { name: "Lancer la chronologie" })).toBeVisible();
    await expect(page.getByRole("slider", { name: "Frise de la campagne" })).toBeVisible();
  });

  test("renders a French classroom sheet", async ({ page }) => {
    await page.goto("/fr/classroom/silk-road");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("La route de la soie");
    await expect(page.getByRole("button", { name: "Imprimer cette fiche" })).toBeVisible();
  });
});

test("redirects bare paths to a locale", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/(en|fr)$/);
});

test("shows the landing screen on a first visit", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("dialog", { name: "Welcome to Chronos" })).toBeVisible();
  await page.getByRole("button", { name: /Explore the atlas/ }).click();
  await expect(page.getByRole("dialog", { name: "Welcome to Chronos" })).toBeHidden();
});

test.describe("api", () => {
  test("answers chronicle requests offline", async ({ request }) => {
    const response = await request.post("/api/chronicle", { data: { query: "Voyages of Zheng He" } });
    expect(response.ok()).toBe(true);
    const body = (await response.json()) as { campaign: { id: string } };
    expect(body.campaign.id).toBe("journey-zheng-he");
  });

  test("streams an offline chronicle as newline-delimited JSON", async ({ request }) => {
    const response = await request.post("/api/chronicle/stream", { data: { query: "Voyages of Zheng He" } });
    expect(response.ok()).toBe(true);
    const lines = (await response.text()).trim().split("\n").map((line) => JSON.parse(line) as { type: string; campaign?: { id: string } });
    expect(lines.at(-1)?.type).toBe("final");
    expect(lines.at(-1)?.campaign?.id).toBe("journey-zheng-he");
  });

  test("runs a class challenge from creation to results", async ({ request, page }) => {
    const created = await request.post("/api/classroom/challenges", {
      data: { campaignId: "silk-road", title: "Silk Road quiz", difficulty: "easy", eventIds: ["silk-zhang-qian", "silk-hexi-corridor", "silk-talas"] },
    });
    expect(created.ok()).toBe(true);
    const { code } = (await created.json()) as { code: string };
    const submitted = await request.post(`/api/classroom/challenges/${code}/results`, {
      data: { name: "Ada", score: 2400, rounds: [{ eventId: "silk-zhang-qian", distanceKm: 320, points: 850 }] },
    });
    expect(submitted.ok()).toBe(true);
    await page.goto(`/en/classroom/results/${code}`);
    await expect(page.getByRole("cell", { name: "Ada" })).toBeVisible();
  });

  test("renders an open graph image for a chronicle", async ({ request }) => {
    const response = await request.get("/api/og?c=silk-road&y=-128");
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/png");
  });

  test("rejects malformed chronicle requests", async ({ request }) => {
    const response = await request.post("/api/chronicle", { data: { query: "x" } });
    expect(response.status()).toBe(400);
  });
});
