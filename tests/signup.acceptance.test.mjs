import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const route = readFileSync(new URL("../src/app/api/signup/route.ts", import.meta.url), "utf8");
const page = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const config = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");
const dockerfile = readFileSync(new URL("../Dockerfile", import.meta.url), "utf8");
const gitignore = readFileSync(new URL("../.gitignore", import.meta.url), "utf8");

const secretPattern = /re_[A-Za-z0-9_]{20,}/;

test("signup API validates input and sends a Resend notification", () => {
  assert.match(route, /new Resend\(process\.env\.RESEND_API_KEY\)/);
  assert.match(route, /penciliva@gmail\.com/);
  assert.match(route, /onboarding@resend\.dev/);
  assert.match(route, /replyTo:\s*email/);
  assert.match(route, /Invalid email|valid email/i);
  assert.doesNotMatch(route, secretPattern, "API key must never be hard-coded");
});

test("signup form posts to the API and exposes accessible states", () => {
  assert.match(page, /<form/);
  assert.match(page, /action="\/api\/signup"/);
  assert.match(page, /fetch\("\/api\/signup"/);
  assert.match(page, /type="email"/);
  assert.match(page, /aria-live="polite"/);
  assert.match(page, /disabled=\{status === "submitting"\}/);
});

test("production runs as a Next server and secrets stay ignored", () => {
  assert.doesNotMatch(config, /output:\s*"export"/);
  assert.match(dockerfile, /CMD \["npm", "run", "start"\]/);
  assert.match(gitignore, /\.env/);
});
