# 1. The problem

## How I worked before

For years I hand-coded in AL, the language of Business Central, an ERP system. A domain consultant brought an idea. I built a solution, tested it and showed it to the consultant on a test system. Then it went into a pull request, where two people reviewed every line, through another test, and into main.

## What changed

At first I used AI for AL. AL is a niche language, and the AI got my patterns and naming wrong. For example, I put all exit conditions at the top of a procedure, so only the valid path is left at the end. The AI wrote code that worked but wasn't clean. I fixed that with skills and coding rules for the agent. It's better, not perfect.

Then I moved to web apps in TypeScript. TypeScript is much newer to me than AL, and agents write almost all of it. I couldn't check every line the way I did in AL, so I needed a different way to know the code is right.

Trust doesn't mean not checking. This is what replaced reading every line:

- The idea agent checks the plan before any code exists. I review the idea, and that part I can judge fully.
- A mandatory visual test (Playwright) shows me the result the way a user sees it.
- Unit tests, security tests and a code review agent run on every change. Today they run inside each development session, not yet as routines that start on their own.
- Work from a smaller model is reviewed by the strongest one.

The closest calls came from communication, not code. A requirement got misunderstood, and the agent built exactly what it was told.

## Where my attention goes now

I don't read every line any more. My attention moved from the code to the decisions around it: what gets built, how it fits the system, and whether the checks prove it works. I ask three questions:

- Does this fit what was asked?
- Does it fit the building block it belongs to?
- Does it fit what this app is for?

A building block is one part of an app with its own purpose and rules.

An agent can build something that works in a second. The difference between vibe coding and developing is that I don't just say "looks good" and press go.

## Why the check comes first

An agent is a tool. It can only be as good as our understanding of the problem. If our explanation is wrong, the agent can't fix that.

A lot of the work now runs without a person watching each step. That's why the plan has to be checked before anything is built. Fixing things afterwards always costs more.
