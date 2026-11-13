# 5. The constitution

The constitution is a short list of rules every agent follows, all the time. Normal guidance, like coding patterns and naming, lives in the usual agent instructions (CLAUDE.md). The constitution only holds the rules that must never be broken.

## What's on it

- No real customer data anywhere in the code.
- No secrets, like API keys or passwords.
- No working around a boundary. If a rule or a guard stops an agent, it stops and asks a person.
- No direct changes to protected branches like main or development. Everything goes through a pull request.
- No development without a go from the idea agent or the area owner.
- Start from the latest rules. Bring the branch up to date before each development cycle.
- Agents never write changes to the constitution.

## How I choose the rules

This is one of my main jobs as the owner, and it takes time. The point of the constitution is that it's short and easy to understand. So only the really important rules go in.

## Who can change it

I propose changes. Three senior approvers review them, and all three have to approve. An agent may never write a change to the rules.

## A rule with a side effect

One rule said agents can't edit the constitution. That makes sense. But we do everything with agents, so it also stopped them from delivering a change that was already approved. We reworded it. An agent may carry an approved change, but never write one.

Rules have side effects. Changing a rule and delivering an approved change are two different things.

A starting point for your own: [constitution template](../templates/constitution.md).
