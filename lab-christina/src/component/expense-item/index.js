import React from 'react'
import ExpenseForm from '../expense-form'
import { connect } from 'react-redux'
import * as expense from '../../action/expense.js'

class Expense extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(card){
    this.props.updateCard(card)
    this.setState({ editing: false })
  }

  render() {
    let { editing } = this.state
    let { expense, expenseRemove, expenseUpdate } = this.props
    return (
      <div className='expense-item'>

      { util.renderIf(!editing,
        <h3><strong> { expense.name } </strong></h3>) }
        <p> ${ expense.price } </p>

      { util.renderIf(editing,
        <ExpenseForm onComplete = { this.handleUpdate } expense={ expense } /> )}

        <button onClick = { () => expenseRemove(expense) }> remove </button>
      </div>
    )
  }
}

let mapStateToProps = (state) => ( { } )

let mapDispatchToProps = (dispatch) => ({
  expenseRemove: (data) => dispatch(expense.remove(data)),
  expenseUpdate: (data) => dispatch(expense.Update(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
