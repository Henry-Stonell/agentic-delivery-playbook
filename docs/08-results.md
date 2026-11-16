# 8. Results from real runs

Everything on this page comes from real runs of the [small reviewer](../reviewer/), a cut-down version of the idea agent, on the test plans and the [demo issues](../demo/). Nothing is made up or edited afterwards.

## The test plans

Eight test plans for the made-up shopping list app. Six have a mistake planted on purpose, each one going against one decision. Two are fine. The reviewer never sees which is which.

| Result | Count |
|---|---|
| Mistakes caught | 6 of 6 |
| Mistakes missed | 0 of 6 |
| Good plans let through | 1 of 2 |
| Good plans wrongly stopped | 1 of 2 |

A mistake only counts as caught when the verdict is "doesn't fit" and the reasons name the decision it goes against. "Fits with questions" on a plan with a mistake doesn't count. Every row, with the reasons it gave, is in [results.md](../reviewer/results.md).

The wrong stop: a plan to show who added each item also showed the day it was added. The request didn't ask for the day. The brief says a plan should do what was asked "and no more", so the reviewer asked first. I left the brief as it is. In this process a wrong stop costs a round of questions, and those add up ([page 6](06-lessons.md#the-open-problem-comprehension-debt)). A missed mistake costs a wrong build.

## The demo issues

Four demo issues, six reviews.

| Issue | What the reviewer said | Right? |
|---|---|---|
| [#1 Clear away bought items](https://github.com/Henry-Stonell/agentic-delivery-playbook/issues/1) | Doesn't fit (decision 1), then fits after the plan was fixed | Yes, both times |
| [#2 Add a note to an item](https://github.com/Henry-Stonell/agentic-delivery-playbook/issues/2) | Fits | Yes |
| [#3 Invite someone to the household](https://github.com/Henry-Stonell/agentic-delivery-playbook/issues/3) | Doesn't fit (decision 3), then fits after the plan was fixed | Yes, both times |
| [#4 Sort the list by shop](https://github.com/Henry-Stonell/agentic-delivery-playbook/issues/4) | Fits with questions. I answered with a written decision. | Yes |

## Cost

Claude Opus 5.5 at high effort. A review costs about one cent: between $0.008 and $0.014 each in the test run, $0.08 for all eight. The six demo reviews cost $0.07 together, between $0.008 and $0.015 each. Two more reviews ran before the reviewer's GitHub token was set, so they weren't posted. They cost $0.02 and gave the same verdicts as the posted ones on #1 and #2. Everything on this page cost $0.17.

## What these numbers don't show

- It's a small sample: eight test plans and six demo reviews.
- I planted the mistakes myself, and each one goes against one clear decision. Real mistakes are often less clear.
- Most plans were reviewed once. The two that ran twice got the same verdict both times, but the same plan can still get a different answer on another run.
- Nothing here measures time saved or rework avoided.
