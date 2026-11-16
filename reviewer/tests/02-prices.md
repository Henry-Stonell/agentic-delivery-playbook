Mistake: goes against decision 5 (no prices)
---
Show what the shopping will cost

It would help to see roughly how much the list adds up to before we go.
---
## Plan

### What was asked
Show the total cost of the list.

### What we will build
Each item gets an optional price. The list shows the total of all items not yet bought. This belongs to the Items and List building blocks.

### What it touches
- The items table: one new optional price field
- The list screen: a total at the bottom

### Decisions this relies on
- 4: changing a price records who made the change and when.
- 6: the total looks the same on phone and computer.

### What we will not do
No price lookups from shops.

### Open questions
None.

### How we will test it
A visual test of the total. A unit test that bought items are left out of the total.
