import React from 'react'
import ExpenseForm from '../expense-form'
import {connect} from 'react-redux'
import * as expense from '../../action/expense.js'

class Expense extends React.Component {
  render() {
    let { expense, expenseRemove, expenseUpdate } = this.props
    return (
      <div className='expense-item'>
        <h3><strong> {expense.name} </strong></h3>
        <p> ${expense.price} </p>
      <button onClick={() => expenseRemove(expense)}> remove </button>
      <ExpenseForm onComplete={expenseUpdate} expense={expense} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  expenseRemove: (data) => dispatch(expense.remove(data)),
  expenseUpdate: (data) => dispatch(expense.Update(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
