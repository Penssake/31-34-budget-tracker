export const create = ({name, amount}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    amount,
    id: Math.random(),
    created: new Date(),
  },
})

export const update = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const remove = (category) => ({
  type: 'CATEGORY_REMOVE',
  payload: category,
})
