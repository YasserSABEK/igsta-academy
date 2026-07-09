import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");

const expectedAssets = [
  "../src/app/favicon.ico",
  "../public/favicon-16x16.png",
  "../public/favicon-32x32.png",
  "../public/apple-touch-icon.png",
  "../public/android-chrome-192x192.png",
  "../public/android-chrome-512x512.png",
  "../public/site.webmanifest",
];

test("official favicon package is installed completely", () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(new URL(asset, import.meta.url)), `Missing ${asset}`);
  }
});

test("official logo asset is used by the shared brand mark", () => {
  assert.match(page, /android-chrome-192x192\.png/);
  assert.ok(!page.includes("brand-orbit"), "Old hand-built logo is still present");
});

test("metadata declares official icons and web manifest", () => {
  assert.match(layout, /manifest:\s*"\/site\.webmanifest"/);
  assert.match(layout, /apple-touch-icon\.png/);
  assert.match(layout, /favicon-32x32\.png/);
});
