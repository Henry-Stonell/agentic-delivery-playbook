# 5. The constitution

The constitution is a short list of rules every agent follows, all the time. Normal guidance, like coding patterns and naming, lives in the usual agent instructions (CLAUDE.md). The constitution only holds the rules that must never be broken, so it stays short and easy to understand.

## What's on it

- No real customer data anywhere in the code.
- No secrets, like API keys or passwords.
- No working around a boundary. If a rule or a guard stops an agent, it stops and asks a person.
- No direct changes to protected branches like main or development. Everything goes through a pull request.
- No development without a go from the idea agent or the area owner.
- Start from the latest rules. Bring the branch up to date before each development cycle.
- Agents never write changes to the constitution.

## Who can change it

A person proposes a change, and others approve it before it counts. An agent may carry an approved change, but never write one. [Page 6](06-lessons.md) shows why that difference matters.

A starting point for your own: [constitution template](../templates/constitution.md).
