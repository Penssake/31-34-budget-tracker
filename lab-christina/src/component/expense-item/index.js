import React from 'react'
import ExpenseForm from '../expense-form'
import {connect} from 'react-redux'
import * as expense from '../../action/expense.js'
import * as util from '../../lib/util.js'
import './expense-item.scss'
import Draggable from '../draggable'

class Expense extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false}

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(expense){
    this.props.updateExpense(expense)
    this.setState({editing: false})
  }

  render() {
    let {expense, expenseRemove, expenseUpdate} = this.props
    let {editing} = this.state;

    return (
      <div className='expense-item'>
        <button className='remove-button' onClick={() => expenseRemove(expense)}> x </button>
        <button onClick={() => this.setState({editing:true})} className='update-button'>&#9998;</button>

        <Draggable data={expense} >
        {util.renderIf(!editing,
          <h3><strong> {expense.name} ${expense.price} </strong></h3>)}
        </Draggable>
        {util.renderIf(editing,
        <ExpenseForm onComplete = {this.handleUpdate} expense={expense} />)}
      </div>
    )
  }
}

let mapStateToProps = (state) => ( { } )

let mapDispatchToProps = (dispatch) => ({
  expenseRemove: (data) => dispatch(expense.remove(data)),
  expenseUpdate: (data) => dispatch(expense.update(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
