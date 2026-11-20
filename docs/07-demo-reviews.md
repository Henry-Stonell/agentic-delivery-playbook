# 7. Two reviews you can open

Two issues from the [demo](../demo/), on a made-up shopping list app. Open them on GitHub and read them from top to bottom: the plan, the reviewer's verdict, and the go. The first plans on #1 and #3 both have a mistake put in on purpose, to show what "doesn't fit" looks like. This page walks through #1. The verdicts on #3 are on [page 8](08-results.md#the-demo-issues). GitHub marks a comment that was edited, so you can see the verdicts weren't changed.

## A plan that broke a decision

Someone asked for a way to clear bought items off the list. The plan added a button that deletes them. The reviewer said it doesn't fit, because decision 1 says items are never deleted. It also pointed out that hiding them would meet the request without a new decision. The updated plan hides them instead, and the reviewer said it fits.

[Open issue #1](https://github.com/Henry-Stonell/agentic-delivery-playbook/issues/1)

## A plan with an open question

Someone wanted the list grouped by shop. The plan left one question open: should shops be free text or a fixed list? The reviewer said it fits with questions, and suggested three possible answers. I chose one and wrote "Decision: go" as the owner. That's the second way work gets its go.

[Open issue #4](https://github.com/Henry-Stonell/agentic-delivery-playbook/issues/4)

## What this shows

- The reviewer checks the plan, not the code. Nothing is built before the go.
- A go is a "fits" from the reviewer's own account, or my written decision after a review. The only way around it is the hands-off label for exceptions, and it only counts when the owner or deputy added it.
- Every run, right or wrong, is on [the results page](08-results.md).
