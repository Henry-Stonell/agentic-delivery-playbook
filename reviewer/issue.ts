// What the reviewer reads from a demo issue and writes back to it. No network here, so it can be tested.

import type { Verdict } from "./reviewer.ts";

const REVIEWER = "henry-plan-reviewer";
const PLAN_AUTHOR = "Henry-Stonell"; // only plans I posted get reviewed

interface IssueComment {
  author: { login: string };
  body: string;
}

const isPlan = (body: string) => /^#{1,6}.*\bplan\b/i.test(body.trim().split("\n", 1)[0] ?? "");

/**
 * The plan to review: the latest comment whose first line is a heading that mentions a plan, from
 * anyone but the reviewer. If that latest plan isn't mine, it stops, so it never reviews an older
 * plan by mistake.
 */
export function latestPlan(comments: IssueComment[]): IssueComment {
  const plan = comments.findLast((c) => c.author.login !== REVIEWER && isPlan(c.body));
  if (!plan) throw new Error("There's no plan on the issue.");
  if (plan.author.login !== PLAN_AUTHOR) {
    throw new Error(`The latest plan is from ${plan.author.login}, not ${PLAN_AUTHOR}, so it isn't reviewed.`);
  }
  return plan;
}

/** True when the reviewer already answered this plan, so it isn't reviewed and paid for twice. */
export function alreadyReviewed(comments: IssueComment[], plan: IssueComment): boolean {
  return comments.slice(comments.indexOf(plan) + 1).some((c) => c.author.login === REVIEWER);
}

/** The comment text. The verdict is on the first line, so a guard can read it. Open questions go below as a list. */
export function formatVerdict(v: Verdict): string {
  const lines = [`Verdict: ${v.verdict}`, "", v.reasons];
  if (v.questions.length > 0) lines.push("", ...v.questions.map((q) => `- ${q}`));
  return `${lines.join("\n")}\n`;
}
