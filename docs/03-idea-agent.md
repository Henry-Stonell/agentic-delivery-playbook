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

Before relying on it, I gave it six plans, each with a mistake hidden on purpose, like a database change the task had ruled out. It found all six. The test round also showed that it asked questions without suggesting answers. Now every question comes with suggested answers. Those six test plans aren't in this repo. The demo reviewer has its own, with every result on [page 8](08-results.md).

## It never reviews itself

When I change the idea agent, the issue gets a hands-off label, so the gate never reviews its own construction. The change still has to pass the test plans and the guard's test cases, and I give the go myself as the owner. It's the one case where the maker also checks, which is why the tests have to pass first.
