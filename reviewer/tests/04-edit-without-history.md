Mistake: goes against decision 4 (every change records who and when)
---
Fix a typo in an item

I typed "mlik" and want to correct it without adding a new item.
---
## Plan

### What was asked
Let people change the name or amount of an item.

### What we will build
Tapping an item opens it for editing. The new name and amount overwrite the old ones. To keep it simple, an edit is not recorded anywhere, only the new values are saved. This belongs to the Items building block.

### What it touches
- The items table
- The edit item form

### Decisions this relies on
None found.

### What we will not do
No editing of who added the item.

### Open questions
None.

### How we will test it
A visual test that edits a name. A unit test that the new values are saved.
