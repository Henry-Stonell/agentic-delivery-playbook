# 2. The quality chain

People own the idea, the analysis, the consultant test and the release. Agents do the rest, and we define the tests they run.

Today the plan review is the only step that runs as an agent routine. An agent routine is an agent that starts on its own when something happens, like a new comment on an issue. Turning the rest of the chain into routines is being built.

| # | Step | Who | What it catches |
|---|---|---|---|
| 1 | Idea | Domain consultant, as a GitHub issue | Not a check. This is where the work starts. |
| 2 | Analysis | Me, with an agent | A request we misunderstood |
| 3 | Plan | Agent, posted on the issue | Not a check. The next step reviews it. |
| 4 | Plan review | [Idea agent](03-idea-agent.md) | A bad idea, or a plan that doesn't match the idea |
| 5 | Development | Agents, using our coding patterns | Not a check. This is where the code is written. |
| 6 | Visual user test | Playwright, shown to me | It works, but not the way I wanted |
| 7 | Unit and security tests | Agents | Something breaks or is unsafe |
| 8 | Code review | Code review agent | Unclean code, rebuilding what already exists, breaking a [constitution](05-constitution.md) rule, hacky solutions |
| 9 | Merge | Agent | Not a check |
| 10 | Integration tests and consultant test | Agents, then the consultant | Breaking something else, or not what the business needed |
| 11 | Production release | Me | Not a check |

## An example

A request says "change the customer numbers from codes to integers" or "remove the foreign keys on a core master-data table". Both would break data across the whole system. Ideally we catch that in our own analysis and ask the consultant why. If we don't, the idea agent stops it.

## Why this order

Each step must pass before the next one starts. A guard enforces this at the first gate today ([the guard](04-the-guard.md)). A planned merge check will enforce it at the pull request. Until then, the later steps rely on the written rule. The only exception is an [urgent fix](04-the-guard.md#exceptions).

The visual test comes before the unit tests on purpose. Seeing the result first tells me if the direction is right. If it isn't, there's no point polishing it with tests. The automated tests run straight after.

## Watching the gates

A routine that watches the gates is being built. It won't analyse anything. It will only check that the gates are switched on and the routines run. An escalation for issues nobody has touched is planned.

## Who is responsible

People ask who takes the blame when this much is automated. Everyone is responsible for their own agents. If my agent breaks something, I can't say the agent did it. **Every line that goes out is mine.** Claude is the tool I use, but it is my code.

The same goes for the routines and the gates. As the owner, it's my job that they work.
