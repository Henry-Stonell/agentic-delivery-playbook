Mistake: goes against decision 3 (only members can see the list)
---
Send the list to the delivery driver

When we order a delivery, the driver should be able to see what we want.
---
## Plan

### What was asked
Let someone outside the household see the list.

### What we will build
A "Share" button that creates a public read-only link to the list. Anyone with the link can see the items but not change them. This belongs to the List building block.

### What it touches
- A new table for share links
- A new read-only list screen

### Decisions this relies on
- 4: creating a link records who created it and when.

### What we will not do
No changes through the link.

### Open questions
None.

### How we will test it
A visual test that opens the link without signing in.
