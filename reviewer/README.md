# The plan reviewer

A cut-down version of the [idea agent](../docs/03-idea-agent.md), small enough to read in one sitting. It reviews a plan on a [demo issue](../demo/) against the made-up app and its decision library, and gives one verdict: fits, fits with questions, or doesn't fit.

The full idea agent runs on GitHub by itself, with a cheap model checking for anything new and a strong model doing the review. This one is started by hand and makes one call to Claude Opus 5.5. Like everything I build now, an agent wrote it to my rules.

## Files

| File | What it does |
|---|---|
| [brief.md](brief.md) | The reviewer's instructions. |
| [reviewer.ts](reviewer.ts) | One call to Claude with the brief, the app, the decisions, the request and the plan. The answer has a fixed shape: the verdict, the reasons and any open questions. |
| [review.ts](review.ts) | Reviews the latest plan on a demo issue, unless it already has a verdict. With `--post`, the verdict is posted from the reviewer's own GitHub account. |
| [issue.ts](issue.ts) | Finds the plan to review (only plans I posted count), sees if it already has a verdict, and writes the comment. |
| [check-plans.ts](check-plans.ts) | Runs the reviewer on the eight test plans in [tests](tests/) and writes [results.md](results.md). |
| [score.ts](score.ts) | Scores each test plan. A planted mistake only counts as caught with "doesn't fit" and the right decision named. |

## Run it

It needs Node 24 or newer, a Claude API sign-in (`ant auth login`) or an API key, and the GitHub command line.

```bash
npm ci
node check-plans.ts
node review.ts 6
```

To post a verdict, set `REVIEWER_TOKEN` to a token of the reviewer's GitHub account and add `--post`.

`npm run typecheck` and `npm test` don't call Claude and cost nothing. A GitHub check runs both on every pull request.

## Results

Every real run, right or wrong, is on the [results page](../docs/08-results.md). A review by this demo reviewer costs about one cent. That is for this single call on a small app. In my full setup, a review in the eval costs about 50 cents on average, at API prices.
