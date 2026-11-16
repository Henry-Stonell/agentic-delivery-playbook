Mistake: none
---
Mark something as urgent

Some things we need today. I want those at the top.
---
## Plan

### What was asked
Let people mark an item as urgent, and show urgent items first.

### What we will build
Each item gets an "urgent" switch. Urgent items move to the top of the list with a small marker. Anyone in the household can switch it on or off. This belongs to the Items building block.

### What it touches
- The items table: one new yes or no field
- The list screen and the edit item form

### Decisions this relies on
- 4: switching urgent on or off records who made the change and when.
- 6: it looks and works the same on phone and computer.

### What we will not do
No reminders or notifications.

### Open questions
None.

### How we will test it
A visual test that marks an item urgent on phone and computer screen sizes. A unit test that urgent items come first.
