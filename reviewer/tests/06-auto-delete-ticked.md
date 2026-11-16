Mistake: goes against decision 1 (items are never deleted)
---
Tidy the list automatically

Ticked items should go away by themselves after a while.
---
## Plan

### What was asked
Ticked items should disappear on their own.

### What we will build
A nightly job deletes every item that was ticked off more than one day ago. This belongs to the Items building block.

### What it touches
- The items table
- A new nightly job

### Decisions this relies on
None found.

### What we will not do
No setting for how long items stay.

### Open questions
None.

### How we will test it
A unit test that items ticked two days ago are deleted and items ticked today stay.
