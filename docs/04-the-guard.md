# 4. The guard

## Why the go has to be binding

At first the go was only a rule in the agent instructions. Then a session on the cheapest model, at low effort, skipped the comments on the issue and offered to "proceed anyway". A rule in a prompt is guidance. An agent can miss it or talk itself out of it. So the rule became a check.

I set the guard's rules: what counts as a go, who may give one, and to refuse when in doubt. An agent built it to those rules.

## How it decides

The guard is a Claude Code hook (PreToolUse). It runs before every push, new pull request and new branch, whether the agent uses git, the GitHub command line or the GitHub connector.

It passes only if the latest plan has a "fits" from the idea agent's own account, or a written decision from the owner or deputy after a review. A new version of the plan cancels the go. If GitHub can't be read, it refuses. The rules and their 18 test cases are in the [guard template](../templates/guard.md).

## What can go wrong

It's a guardrail, not a wall. It only sees what the agent does through its own tools.

| What could go wrong | What happens | Status |
|---|---|---|
| Someone writes "the owner approved this", adds a label or says "yes" in chat | Never a go. Only the idea agent's account and the owner's and deputy's accounts count. | Covered |
| Text in an issue tells the agent to skip the go | The guard doesn't follow text. It only checks who gave the go. | Covered |
| Text in an issue tells the agent to ignore its other rules | Those rules are guidance, not a guard. The later checks still run. | Partly covered |
| The plan changes after a "fits" | The go is cancelled until the new version is reviewed. | Covered |
| The hands-off label is used to skip the gates | It only counts when the owner or deputy added it. Keep that group small. | Covered |
| An agent calls the GitHub API directly, like with curl, or a person pushes by hand | The hook doesn't see it. Branch protection on the server stops it. | Needs a second layer |
| The idea agent says "fits" when it shouldn't | The later steps still run: the visual test, the tests, the code review and the consultant test. | Partly covered |

## Exceptions

The hands-off label skips the gates in two cases: work on the idea agent itself, and an urgent fix. For an urgent fix, I add the label and write a decision on the issue as the owner. It's 100% on me. A named deputy can do the same when I'm away. A planned merge check will refuse any pull request that skipped a step without that decision.

## Bringing a team along

It's an adjustment, because before you could let your agents do anything at any time. Present it as a safety net. It makes sure what ships is reviewed development, not unchecked agent output.
