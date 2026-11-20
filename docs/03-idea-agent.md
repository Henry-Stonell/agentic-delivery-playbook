# 3. The idea agent

The idea agent is the first gate. It reviews the plan before any code is written. It runs on GitHub as a routine. The [demo reviewer](../reviewer/) is a cut-down version you can open.

## Why it exists

People can't read or write as fast as agents, but they can evaluate. The idea agent does most of the analysis, so the developer has time for the architecture.

## What it reads

1. The request.
2. The decision library: the decisions already made, written down.
3. The building block the task belongs to.
4. The work areas. An area can have an owner, and can be frozen.

## The three verdicts

| Verdict | What happens next |
|---|---|
| Fits | The developer can start. |
| Fits with questions | Answer the questions. A frozen area also needs its owner's go. |
| Doesn't fit | Come back with a new plan. |

Everything happens on the GitHub issue: the plan, the verdict below it, and the replies.

A cheap model checks if there is anything new to review. Only then does the strongest model do the review. Each one only gets the information it needs.

## Not reviewing forever

You can tweak a plan for hours and never start, and until something is built there's nothing to test against. After each round the idea agent only reviews what's new, but without a limit it can still take about six rounds. So a person decides when the plan is good enough to start. Saying "go ahead, start building" is one of the developer's responsibilities.

## How I tested it

**A test round.** On 27 October, the day the plan rules went in, I filed six test issues with problems planted on purpose, such as a plan that breaks a module boundary and a sub-issue that breaks its parent's scope. The round showed that it asked questions without suggesting answers. Prompt fixes followed the same day, and now every question comes with suggested answers.

**A replay of real past issues.** On 28 October I replayed it on twelve real issues against an answer key I set. It matched 7 of 12. The definitions of the verdicts were too loose, so I tightened them and replayed two of the cases it had got wrong. Both came out right.

**A saved eval set.** Then I built an eval set from real and invented plans: 18 cases, each run three times. On the latest full run, on 18 November, all 18 cases matched, 54 of 54 runs. I set the answer keys myself. The rule is a full run before merging any change that could alter a verdict. Today I start it by hand. Next, it runs automatically whenever the prompt or the model changes.

These cases use internal data, so they aren't in this repo. The eight test plans on [page 8](08-results.md) are a different set: they belong to the demo reviewer, and they are in this repo.

## How it has done in use

It started posting on 23 October 2026, and the plan rules and the run log followed on 27 October. By 20 November it had posted 50 plan reviews on 13 real issues. It also checks new issues before any plan is written. One issue bundled a security fix with a riskier change to a frozen area. It said "doesn't fit", and the issue was split within minutes.

Early on, one run read old rules from the wrong branch and commented on a test issue it should have ignored. The fix was in within minutes: every run now checks out the development branch and checks that the rule files exist before it starts.

## It never reviews itself

When I change the idea agent, the issue gets a hands-off label, so the gate never reviews its own construction. The change has to pass a full run of the eval set before it merges, and I give the go myself as the owner. It's the one case where the maker also checks, which is why the eval has to pass first.
