import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://thegriffinlounge.uk/";
const outDir = path.resolve("public/assets/legacy");
const manifestPath = path.resolve("public/assets/asset-sources.json");

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1400 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
});

const responses = new Map();
page.on("response", async (response) => {
  const url = response.url();
  const type = response.headers()["content-type"] || "";
  if (/image|font|text\/css|javascript/.test(type)) {
    responses.set(url, { url, contentType: type, status: response.status() });
  }
});

await page.goto(siteUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(8000);
await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});

const snapshot = await page.evaluate(() => {
  const absolute = (value) => {
    try {
      return new URL(value, location.href).href;
    } catch {
      return value;
    }
  };

  const images = [...document.images]
    .map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt || "",
      width: img.naturalWidth,
      height: img.naturalHeight,
    }))
    .filter((img) => img.src);

  const cssBackgrounds = [...document.querySelectorAll("*")]
    .map((node) => getComputedStyle(node).backgroundImage)
    .filter((value) => value && value !== "none")
    .flatMap((value) =>
      [...value.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((match) =>
        absolute(match[1]),
      ),
    );

  const links = [...document.querySelectorAll("a[href]")]
    .map((a) => ({
      text: a.textContent.trim().replace(/\s+/g, " "),
      href: absolute(a.getAttribute("href")),
    }))
    .filter((link) => link.href);

  const meta = [...document.querySelectorAll("meta")]
    .map((node) => ({
      name: node.getAttribute("name") || node.getAttribute("property") || "",
      content: node.getAttribute("content") || "",
    }))
    .filter((item) => item.name || item.content);

  return {
    title: document.title,
    text: document.body.innerText,
    images,
    cssBackgrounds: [...new Set(cssBackgrounds)],
    links,
    meta,
  };
});

const assetUrls = [
  ...snapshot.images.map((img) => img.src),
  ...snapshot.cssBackgrounds,
  ...snapshot.meta
    .filter((item) => /image/i.test(item.name))
    .map((item) => item.content),
  ...[...responses.values()]
    .filter((item) => item.contentType.startsWith("image/"))
    .map((item) => item.url),
]
  .filter(Boolean)
  .filter((url) => {
    try {
      const parsed = new URL(url);
      return ["thegriffinlounge.uk", "assets.zyrosite.com"].includes(parsed.hostname);
    } catch {
      return false;
    }
  });

const uniqueAssetUrls = [...new Set(assetUrls)];
const manifest = {
  crawledAt: new Date().toISOString(),
  siteUrl,
  page: snapshot,
  downloadedAssets: [],
};

for (let index = 0; index < uniqueAssetUrls.length; index += 1) {
  const url = uniqueAssetUrls[index];
  const parsed = new URL(url);
  const originalName = path.basename(parsed.pathname) || `asset-${index}`;
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "-");
  const fileName = `${String(index + 1).padStart(2, "0")}-${safeName}`;
  const filePath = path.join(outDir, fileName);

  try {
    const response = await page.request.get(url);
    if (!response.ok()) {
      manifest.downloadedAssets.push({
        sourceUrl: url,
        status: response.status(),
        error: "Download failed",
      });
      continue;
    }

    await writeFile(filePath, await response.body());
    manifest.downloadedAssets.push({
      sourceUrl: url,
      localPath: path.relative(process.cwd(), filePath),
      contentType: response.headers()["content-type"] || "",
      status: response.status(),
    });
  } catch (error) {
    manifest.downloadedAssets.push({
      sourceUrl: url,
      error: error.message,
    });
  }
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
await page.screenshot({ path: "public/assets/legacy-page-screenshot.png", fullPage: true });
await browser.close();

console.log(`Downloaded ${manifest.downloadedAssets.filter((item) => item.localPath).length} assets`);
console.log(`Wrote ${manifestPath}`);
