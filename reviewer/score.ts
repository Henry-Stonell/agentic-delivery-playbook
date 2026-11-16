// How one review of a test plan is scored. A plan with a planted mistake must get "doesn't fit",
// for the right reason: the reasons have to name the decision it goes against. A plan without a
// mistake must get "fits".

export function score(mistake: string, verdict: string, reasons: string): string {
  if (mistake === "none") return verdict === "fits" ? "right" : "wrongly stopped";
  if (verdict === "fits") return "missed";
  if (verdict === "fits with questions") return "only questioned";

  const decision = /decision (\d+)/.exec(mistake)?.[1];
  const named = decision !== undefined && new RegExp(`\\bdecision ${decision}\\b`, "i").test(reasons);
  return named ? "caught" : "caught, wrong reason";
}
