Mistake: goes against decision 2 (amounts are a number and a fixed unit)
---
Let us type amounts our own way

I want to write things like "2 packs" or "a few" instead of picking a unit.
---
## Plan

### What was asked
Let people type the amount in their own words.

### What we will build
The amount becomes one free text field instead of a number and a unit. This belongs to the Items building block.

### What it touches
- The items table: the amount and unit fields become one text field
- The add item and edit item forms

### Decisions this relies on
- 4: changing the amount records who made the change and when.

### What we will not do
No conversion between units.

### Open questions
None.

### How we will test it
A visual test that adds an item with "2 packs". A unit test for saving free text.
