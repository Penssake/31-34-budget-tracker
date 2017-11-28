export const create = ({name, amount}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    amount,
    id: Math.random(),
    created: new Date(),
  },
})

export const updateCategory = (expense, categoryID) => ({
  type: 'EXPENSE_UPDATE_CATEGORY_ID',
  payload: {expense, categoryID}
})

export const update = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const remove = (category) => ({
  type: 'CATEGORY_REMOVE',
  payload: category,
})
