// Reviews the latest plan on a demo issue. It prints the verdict. With --post, it also posts the
// verdict from the reviewer's own GitHub account.
//
// Usage: node review.ts <issue number> [--post]

import { execFileSync } from "node:child_process";
import { alreadyReviewed, formatVerdict, latestPlan } from "./issue.ts";
import { reviewPlan } from "./reviewer.ts";

const REPO = "Henry-Stonell/agentic-delivery-playbook";

interface Issue {
  title: string;
  body: string;
  labels: { name: string }[];
  comments: { author: { login: string }; body: string }[];
}

const [issueNumber, flag] = process.argv.slice(2);
if (!issueNumber || !/^\d+$/.test(issueNumber)) throw new Error("Usage: node review.ts <issue number> [--post]");

// Check this before the paid review, so a missing token costs nothing.
const token = process.env.REVIEWER_TOKEN;
if (flag === "--post" && !token) throw new Error("Set REVIEWER_TOKEN to the reviewer account's token before posting.");

// Runs the GitHub command line. With a token, it acts as that account instead of mine.
const gh = (args: string[], token?: string) =>
  execFileSync("gh", args, { encoding: "utf8", env: token ? { ...process.env, GH_TOKEN: token } : process.env });

const issue = JSON.parse(gh(["issue", "view", issueNumber, "--repo", REPO, "--json", "title,body,labels,comments"])) as Issue;
if (!issue.labels.some((l) => l.name === "demo")) throw new Error(`Issue #${issueNumber} isn't a demo issue.`);

const plan = latestPlan(issue.comments);
if (alreadyReviewed(issue.comments, plan)) throw new Error(`The latest plan on #${issueNumber} already has a verdict.`);

const review = await reviewPlan(`${issue.title}\n\n${issue.body}`, plan.body);
const comment = formatVerdict(review.verdict);
console.log(comment);
console.log(`Model: ${review.model}. Tokens: ${String(review.inputTokens)} in, ${String(review.outputTokens)} out. Cost: $${review.costInDollars.toFixed(4)}`);

if (flag === "--post") {
  gh(["issue", "comment", issueNumber, "--repo", REPO, "--body", comment], token);
  console.log(`Posted on #${issueNumber} as the reviewer.`);
}
