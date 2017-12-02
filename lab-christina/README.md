## Budget App

#### Category

```
Start: npm run watch
```
#### CategoryItem
```
* Each Category item contains an ID, timestamp, name, and budgeted amount when created
* The category reducer supports a `CATEGORY_CREATE` action, a `CATEGORY_UPDATE` action 
and a `CATEGORY_REMOVE` action.
* `CATEGORY_CREATE` adds to an array of categories by returning the payload of a category 
with the current state of the app.
* `CATEGORY_REMOVE` removes a category by filtering and returning the current state of the 
app minus the ID that matches the one selected for removal.
* `CATEGORY_UPDATE` updates a category my mapping the current state, and replacing selected 
ID with new the categoryID.

```
#### Expense
```
* Each Expense item contains a price and a title
* The Expense reducer supports a 'CATEGORY_CREATE' action, a 'CATEGORY_UPDATE' action, an 
'EXPENSE_CREATE' action, an 'EXPENSE_UPDATE' action, an 'EXPENSE_REMOVE' action, and an 
'EXPENSE_UPDATE_CATEGORY_ID action.
* CATEGORY_CREATE takes in the state and a payload.id and returns an object.
* CATEGORY_UPDATE maps and replaces the selected id
* EXPENSE_CREATE creates an expense with a specific categoryID
* EXPENSE_UPDATE maps the current state and returns an object with the new expense itemID 
replacing the one selected for update
* EXPENSE_REMOVE removes an expense by filtering and returning the current state of the app 
minus the ID that matches the one selected for removal.

```
