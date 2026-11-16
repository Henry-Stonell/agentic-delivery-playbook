import assert from "node:assert/strict";
import { test } from "node:test";
import { alreadyReviewed, formatVerdict, latestPlan } from "./issue.ts";

const comment = (login: string, body: string) => ({ author: { login }, body });

test("finds the latest plan, also under another heading like '## Revised plan'", () => {
  const comments = [
    comment("Henry-Stonell", "## Plan\nFirst version."),
    comment("henry-plan-reviewer", "Verdict: fits"),
    comment("Henry-Stonell", "## Revised plan\nSecond version."),
  ];
  assert.equal(latestPlan(comments).body, "## Revised plan\nSecond version.");
});

test("stops when the latest plan isn't mine, instead of reviewing an older one", () => {
  const comments = [comment("Henry-Stonell", "## Plan\nMine."), comment("someone-else", "## Plan v2\nTheirs.")];
  assert.throws(() => latestPlan(comments), /latest plan is from someone-else/);
});

test("stops when there is no plan", () => {
  assert.throws(() => latestPlan([comment("Henry-Stonell", "Just a comment.")]), /no plan/);
});

test("sees when the latest plan already has a verdict", () => {
  const plan = comment("Henry-Stonell", "## Plan\nFirst version.");
  assert.equal(alreadyReviewed([plan], plan), false);
  assert.equal(alreadyReviewed([plan, comment("henry-plan-reviewer", "Verdict: fits")], plan), true);
});

test("puts the verdict on the first line and the questions below as a list", () => {
  const text = formatVerdict({ verdict: "fits with questions", reasons: "Mostly right.", questions: ["Free text or a list?"] });
  assert.equal(text, "Verdict: fits with questions\n\nMostly right.\n\n- Free text or a list?\n");
});
