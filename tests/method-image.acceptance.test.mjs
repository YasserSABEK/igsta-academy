import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("How IGSTA works uses the latest supplied image", () => {
  assert.ok(existsSync(new URL("../public/igsta/how-igsta-works.jpg", import.meta.url)));
  assert.match(page, /src="\/igsta\/how-igsta-works\.jpg"/);
  assert.doesNotMatch(page, /src="\/igsta\/brand-reference-wide\.jpg"/);
});
