import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");

const requiredCopy = [
  "Skills that move",
  "English & Communication",
  "Digital & AI Skills",
  "Career & Leadership",
  "Health & Life Skills",
  "How IGSTA works",
  "Built for Algeria.",
  "Frequently asked questions",
  "Join the next cohort",
];

test("landing page contains the complete IGSTA information architecture", () => {
  for (const copy of requiredCopy) {
    assert.ok(page.includes(copy), `Missing required copy: ${copy}`);
  }
});

test("landing page uses the generated hero and supplied method image", () => {
  assert.match(page, /hero-brand\.jpg/);
  assert.match(page, /how-igsta-works\.jpg/);
});

test("landing page has accessible navigation, semantic main content, and reduced-motion support", () => {
  assert.match(page, /Skip to content/);
  assert.match(page, /<main[^>]*id="main-content"/);
  assert.match(page, /aria-label="Primary navigation"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("landing page avoids the prohibited old WhatsApp number", () => {
  assert.ok(!page.includes("213696699378"));
});

test("metadata includes social sharing and robots configuration", () => {
  assert.match(layout, /openGraph/);
  assert.match(layout, /robots/);
});
