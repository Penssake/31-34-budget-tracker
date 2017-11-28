const emptyState = {}

export default (state=emptyState, {type, payload}) => {
  let categoryID, categoryExpenses, result
  switch(type){
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] }
    case 'CATEGORY_UPDATE':
     return state
    case 'EXPENSE_CREATE':
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = [...categoryExpenses, payload]
      return { ...state, [categoryID]: result }
    case 'EXPENSE_UPDATE':
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = categoryExpenses.map(item =>
        item.id === payload.id ? payload : item)
      return { ...state, [categoryID]: result }
    case 'EXPENSE_REMOVE':
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = categoryExpenses.filter(item => item.id !== payload.id)
      return { ...state, [categoryID]: result }
    case 'EXPENSE_UPDATE_CATEGORY_ID':
      let expense = payload.expense
      let oldSectionID = expense.sectionID
      if(oldSectionID == payload.sectionID)
        return state
      let oldSection = state[expense.sectionID].filter(item => item.id !== expense.id)
        expense.sectionID = payload.sectionID
      let newSection = [expense, ...state[payload.sectionID]]
        return {
          ...state,
          [oldSectionID]: oldSection,
          [expense.sectionID]: newSection,
        }
    default:
      return state
  }
}
