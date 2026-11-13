# 1. The problem

## How we worked before

Before agents, we hand-coded everything in AL, the language of an ERP system. A domain consultant brought an idea. We built a solution, tested it ourselves and showed it to the consultant on a test system. Then it went into a pull request, where two people reviewed every line. After that it went into development, through another test, and into main.

## What changed

At first we used AI for AL. AL is a niche language, and the AI got our patterns and naming wrong. For example, we put all exit conditions at the top of a procedure, so only the valid path is left at the end. The AI wrote code that worked but wasn't clean. We fixed that with skills and coding rules for the agent. It's better, not perfect.

Then we moved to a monorepo of web apps in TypeScript. I don't know TypeScript or JavaScript in depth, and I can't analyse it line by line the way I can with AL. Before, I read and checked all the code myself. Now I had to trust the agent.

Trust doesn't mean not checking. This is what replaced reading every line:

- The idea agent checks the plan before any code exists. I review the idea, and that part I can judge fully.
- A mandatory visual test (Playwright) shows me the result the way a user sees it.
- Unit tests, security tests and a code review agent run on every change.
- Work from a smaller model is reviewed by the strongest one.

The closest calls came from communication, not code. A consultant's requirement got misunderstood on our side, and the agent built exactly what it was told.

## Where my attention goes now

I don't read every line any more. We are no longer just developers. We are product owners and system architects. I ask three questions:

- Does this fit what was asked?
- Does it fit the building block it belongs to?
- Does it fit what this app is for?

A building block is one part of an app with its own purpose and rules.

An agent can build something that works in a second. The difference between vibe coding and developing is that I don't just say "looks good" and press go.

## Why the check comes first

An agent is a tool. It can only be as good as our understanding of the problem. If our explanation is wrong, the agent can't fix that.

A lot of our work now runs without a person watching each step. That's why the plan has to be checked before anything is built. Fixing things afterwards always costs more.
