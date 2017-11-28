## Budget App

#### Category
```
* Each Category contains an ID, timestamp, name, and budgeted amount when created
* The category reducer supports a `CATEGORY_CREATE` action, a `CATEGORY_UPDATE` action and a `CATEGORY_REMOVE` action.
* `CATEGORY_CREATE` adds to an array of categories by returning the payload of a category with the current state of the app.
* `CATEGORY_REMOVE` removes a category by filtering and returning the current state of the app minus the ID that matches the one selected for removal.
* `CATEGORY_UPDATE` updates a category my mapping the current state, and replacing selected ID with new the categoryID.

```
