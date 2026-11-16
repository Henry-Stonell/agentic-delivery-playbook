// Reviews one plan against the app and the decision library, with one call to Claude.

import { readFileSync } from "node:fs";
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";

const MODEL = "claude-opus-5-5";
// Dollars per million tokens for this model, to show what each review costs.
const PRICE = { input: 4, output: 20 };

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");
const BRIEF = read("./brief.md");
const APP = read("../demo/app.md");
const DECISIONS = read("../demo/decisions.md");

// The shape the answer must have. The API makes Claude answer in exactly this shape.
const Verdict = z.object({
  verdict: z.enum(["fits", "fits with questions", "doesn't fit"]),
  reasons: z.string().describe("Two or three short sentences. Name the decision number when one matters."),
  questions: z.array(z.string()).describe("Each open point as a question with possible answers. Empty unless the verdict is fits with questions."),
});
export type Verdict = z.infer<typeof Verdict>;

export interface Review {
  verdict: Verdict;
  model: string;
  inputTokens: number;
  outputTokens: number;
  costInDollars: number;
}

const client = new Anthropic(); // uses ANTHROPIC_API_KEY, or the sign-in from `ant auth login`

export async function reviewPlan(request: string, plan: string): Promise<Review> {
  const response = await client.beta.messages.parse({
    model: MODEL,
    max_tokens: 16000,
    // If the model declines for safety reasons, the API retries on a fallback model.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "high", format: betaZodOutputFormat(Verdict) },
    system: BRIEF,
    messages: [
      {
        role: "user",
        content: [
          `<app>\n${APP}</app>`,
          `<decisions>\n${DECISIONS}</decisions>`,
          `<request>\n${request}\n</request>`,
          `<plan>\n${plan}\n</plan>`,
        ].join("\n\n"),
      },
    ],
  });

  if (response.stop_reason === "refusal" || !response.parsed_output) {
    throw new Error(`No verdict came back (stop reason: ${response.stop_reason ?? "unknown"}).`);
  }
  // If a fallback model answered, the usage lists it as a "fallback_message" with its model.
  const served = response.usage.iterations?.find((i) => i.type === "fallback_message");
  const model = served?.type === "fallback_message" ? served.model : MODEL;

  const { input_tokens, output_tokens } = response.usage;
  return {
    verdict: response.parsed_output,
    model,
    inputTokens: input_tokens,
    outputTokens: output_tokens,
    // At this model's prices. If a fallback model answered, it's an estimate.
    costInDollars: (input_tokens * PRICE.input + output_tokens * PRICE.output) / 1_000_000,
  };
}
