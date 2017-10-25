export const create = ({name, price, categoryID}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    id: Math.random(),
    categoryID,
  },
})

export const update = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const remove = (expense) => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
})
