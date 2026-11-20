# 2. The quality chain

People own the idea, the analysis, the consultant test and the release. Agents do the rest. We define the tests they run, so the agent that writes the code doesn't decide what counts as passing.

An agent routine is an agent that starts on its own when something happens, like a new comment on an issue.

| # | Step | Who | What it catches |
|---|---|---|---|
| 1 | Idea | Domain consultant, as a GitHub issue | n/a |
| 2 | Analysis | Me, with an agent | A request we misunderstood |
| 3 | Plan | Agent, posted on the issue | n/a |
| 4 | Plan review | [Idea agent](03-idea-agent.md) | A bad idea, or a plan that doesn't match the idea |
| 5 | Development | Agents, using our coding patterns | n/a |
| 6 | Visual user test | Playwright, shown to me | It works, but not the way I wanted |
| 7 | Unit and security tests | Agents | Something breaks or is unsafe |
| 8 | Code review | Code review agent | Unclean code, rebuilding what already exists, breaking a [constitution](05-constitution.md) rule, hacky solutions |
| 9 | Merge into development | Agent | n/a |
| 10 | Integration tests and consultant test | Agents, then the consultant | Breaking something else, or not what the business needed |
| 11 | Merge into main and release | Me | n/a |

## What runs today

This is my own setup, not this repo. The [demo reviewer](../reviewer/) is a cut-down version of step 4 that you can open.

| Part | Status |
|---|---|
| Plan review (step 4), as a routine that starts on its own | Built |
| Guard that makes the plan review's go binding | Built |
| Steps 5 and 7 to 9 | Built. Some checks run on every pull request, the rest inside each development session |
| Visual user test (step 6) as an automated Playwright test | Planned |
| The rest of the chain as routines | Being built |
| A routine that checks the gates are on and running | Planned |
| Merge check that refuses anything that skipped a step | Planned |
| Escalation of issues nobody has touched | Planned |

## An example

Say a request asks to change customer numbers from codes to integers, or to remove the foreign keys on a core master-data table. Both would break data across the whole system. Ideally we catch that in our own analysis and ask the consultant why. If we don't, the idea agent stops it.

## Why this order

Each step must pass before the next one starts. [The guard](04-the-guard.md) enforces this at the first gate. Until the merge check is built, the later steps rely on the written rule. There are two [exceptions](04-the-guard.md#exceptions): an urgent fix, and work on the idea agent itself.

The visual test comes before the unit tests on purpose. Seeing the result first tells me if the direction is right. If it isn't, there's no point polishing it with tests. The automated tests run straight after.

## Two tracks

Work can run on two tracks. On the human track, a developer works through the chain with an agent in a session. On the automated track, a routine picks up the work and runs the steps on its own. Today only the plan review runs on the automated track. The gates are the same on both. A routine that skips the plan review is just as bad as an agent in a session that skips it, so every gate and check has to be set up for the routines too, not only for the sessions.

## Watching the gates

A gate that has quietly stopped running looks the same as a gate that lets everything through. That's what the routine that watches the gates is for. It won't analyse anything. It will only check that the gates are switched on and the routines run.

## Who is responsible

People ask who takes the blame when this much is automated. Everyone is responsible for their own agents. If my agent breaks something, I can't say the agent did it. **I'm responsible for every line that goes out, including the ones I didn't read myself.** That's why the checks exist. Claude is the tool I use, but it is my code.

The same goes for the routines and the gates. As the owner, it's my job that they work.
