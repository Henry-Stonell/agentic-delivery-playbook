import assert from "node:assert/strict";
import { test } from "node:test";
import { score } from "./score.ts";

const MISTAKE = "goes against decision 5 (no prices)";

test("a planted mistake is caught only with doesn't fit and the right decision", () => {
  assert.equal(score(MISTAKE, "doesn't fit", "This goes against decision 5."), "caught");
  assert.equal(score(MISTAKE, "doesn't fit", "This goes against decision 2."), "caught, wrong reason");
  assert.equal(score(MISTAKE, "doesn't fit", "This goes against decision 50."), "caught, wrong reason");
});

test("a planted mistake that only gets questions, or a fits, is not caught", () => {
  assert.equal(score(MISTAKE, "fits with questions", "Decision 5 may matter."), "only questioned");
  assert.equal(score(MISTAKE, "fits", "Looks fine."), "missed");
});

test("a good plan must get fits", () => {
  assert.equal(score("none", "fits", ""), "right");
  assert.equal(score("none", "fits with questions", ""), "wrongly stopped");
});
