import React from 'react'
import CategoryForm from '../category-form'
import {connect} from 'react-redux'
import * as category from '../../action/category.js'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import * as expense from '../../action/expense.js'
import * as util from '../../lib/util.js'

class CategoryItem extends React.Component {
  render(){
    let { category, categoryRemove, categoryUpdate, expenseCreate, expenses } = this.props

    let categoryExpenses = expenses[category.id]

    return (
      <div className='category-item'>
        <h3><strong>{category.name}</strong></h3>
        <p>${category.amount}</p>
        <button onClick={() => categoryRemove(category)}> remove </button>

          <CategoryForm onComplete={categoryUpdate} category={category}/>

          <ExpenseForm onComplete={expenseCreate} category={category}/>
          {categoryExpenses.map((expense, i) =>
            <ExpenseItem expense={expense} key={i} />
          )}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  expenses: state.expenses
})

let mapDispatchToProps = (dispatch) => ({
  categoryUpdate: (data) => dispatch(category.update(data)),
  categoryRemove: (data) => dispatch(category.remove(data)),
  expenseCreate: (data) => dispatch(expense.create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
