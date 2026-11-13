# 6. What broke, and what I learned

## Four things that broke

| What broke | What we changed |
|---|---|
| A cheap session skipped the issue comments and offered to "proceed anyway". | The go became a guard, not just a written rule. See [the guard](04-the-guard.md). |
| The rule "agents can't edit the constitution" also stopped them from delivering an approved change. | We reworded it. Agents may carry an approved change, never write one. |
| The idea agent couldn't see the whole history of an issue through the GitHub connector. | We fixed how it reads issues. A reviewer can only judge what it can read. |
| An agent kept working on an old branch for a day, after a constitution change was merged. It never saw the new rules. | Every development cycle now starts by bringing the branch up to date. |

## What I got wrong

I thought agents would be much less effective than they are.

I also thought the choice of model mattered much less than it does. I once ran a summary of our decision library on Haiku, the cheapest model. It left out a lot, and I had to redo it on Sonnet. It's the same in development. When a Haiku agent builds something, an Opus agent reviews it. Haiku can read things and collect raw output, but it doesn't reason about what it reads.

You can let a dispatcher agent choose the model. But as the person with the overview, you should know which model suits which job.

## What I would do differently

I would break the work into smaller pieces. The idea agent was too much to build at once. For the next parts of the chain, every piece gets its own target date.

I would also decide earlier. I started building before I had decided how many review rounds we allow. Next time I decide that first.

## The open problem: comprehension debt

Our biggest problem today isn't technical. It's communication between people and their agents.

When my agent needs something from a colleague, it asks on the issue and tags them. That works with five open issues. But agents create questions much faster than people can answer them. At one point I needed one colleague's input on about 50 tasks. I had tagged them 50 times, they had tagged me 25 times, and the only way to sort it was to ask an agent.

Other teams have the same problem. I've seen it called "comprehension debt": agents produce work faster than the people responsible can understand it.

No program will solve it. It's about how we work together and what we ask of each other first. I don't have the answer yet, and it's what I'm working on next.

## Advice for a team starting this

Understand your new role and get used to it. We don't develop by writing code any more. We manage the agents that write it. Think like a product owner.
