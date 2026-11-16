// Runs the reviewer on every test plan in tests/ and writes what it said to results.md.
// Every row comes from a real run. Nothing is edited by hand.
//
// Usage: node check-plans.ts

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { reviewPlan } from "./reviewer.ts";
import { score } from "./score.ts";

const dir = new URL("./tests/", import.meta.url);
const rows: string[] = [];
const models = new Set<string>();
let totalCost = 0;

for (const file of readdirSync(dir).filter((f) => f.endsWith(".md")).sort()) {
  // Each test file has three parts split by "---" lines: what's wrong with it, the request, and the
  // plan. A "---" line inside the plan stays part of the plan. Windows line endings are allowed too.
  const [header = "", request = "", ...planParts] = readFileSync(new URL(file, dir), "utf8").split(/\r?\n---\r?\n/);
  const plan = planParts.join("\n---\n");
  const mistake = /^Mistake: (.+)$/m.exec(header)?.[1]?.trim() ?? "?";
  const review = await reviewPlan(request.trim(), plan.trim());
  const said = review.verdict.verdict;
  const result = score(mistake, said, review.verdict.reasons);
  models.add(review.model);
  totalCost += review.costInDollars;
  rows.push(`| ${file} | ${mistake} | ${said} | ${result} | ${review.verdict.reasons.replace(/\s*\n\s*/g, " ")} | $${review.costInDollars.toFixed(3)} |`);
  console.log(`${file}: ${said} (${result})`);
}

const report = [
  "# Test results",
  "",
  `Run on ${new Date().toISOString().slice(0, 10)} with ${[...models].join(", ")} at high effort. Total cost: $${totalCost.toFixed(2)}.`,
  "",
  "| Test plan | Planted mistake | Verdict | Result | Reasons it gave | Cost |",
  "|---|---|---|---|---|---|",
  ...rows,
  "",
];
writeFileSync(new URL("./results.md", import.meta.url), report.join("\n"));
console.log(`Wrote results.md. Total cost: $${totalCost.toFixed(2)}`);
