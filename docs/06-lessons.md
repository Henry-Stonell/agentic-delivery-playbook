# 6. What broke, and what I learned

## Four things that broke

| What broke | What I changed |
|---|---|
| A cheap session skipped the issue comments and offered to "proceed anyway". | The go became a guard, not just a written rule. See [the guard](04-the-guard.md). |
| The rule "agents can't edit the constitution" also stopped them from delivering an approved change. | I reworded it. Agents may carry an approved change, never write one. |
| The idea agent couldn't see the whole history of an issue through the GitHub connector. | I fixed how it reads issues. A reviewer can only judge what it can read. |
| An agent kept working on an old branch for a day, after a constitution change was merged. It never saw the new rules. | Every development cycle now starts by bringing the branch up to date. |

## What I got wrong

I thought agents would be much less effective than they are.

I also thought the choice of model mattered much less than it does. I once ran a summary of a decision library on Haiku, the cheapest model. It left out a lot, and I had to redo it on Sonnet. It's the same in development. When a Haiku agent builds something, an Opus agent reviews it. Haiku can read things and collect raw output, but it doesn't reason about what it reads.

You can let a dispatcher agent choose the model. But as the person with the overview, you should know which model suits which job.

## What I would do differently

I would break the work into smaller pieces. The idea agent was too much to build at once. Now every piece gets its own target date, and when priorities change, the date moves openly.

I would also decide earlier. I started building before I had decided how many review rounds to allow. Next time I decide that first.

## The open problem: comprehension debt

The biggest problem today isn't technical. It's communication between people and their agents.

When an agent needs something from a person, it asks on the issue and tags them. That works with a few open issues. But agents ask much faster than people can answer, and the questions pile up on the people who know the answers.

Other teams have the same problem. I've seen it called "comprehension debt": agents produce work faster than the people responsible can understand it.

No program will solve it. It's about how we work together and what we ask of each other first. I don't have the answer yet, and it's what I'm working on next.

## Advice for a team starting this

Expect your role to change. You move from writing the code to directing it: deciding what gets built and setting up the checks that prove it works. You don't judge every line. You judge whether it works the way it should, and whether it's going in the direction you want.
