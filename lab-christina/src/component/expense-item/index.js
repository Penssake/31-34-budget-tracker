import React from 'react'
import ExpenseForm from '../expense-form'
import {connect} from 'react-redux'
import * as expense from '../../action/expense.js'
import * as util from '../../lib/util.js'
import Modal from '../modal'
import './expense-item.scss'

class Expense extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false}

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(card){
    this.props.updateCard(card)
    this.setState({editing: false})
  }

  render() {
    let {expense, expenseRemove, expenseUpdate} = this.props
    let showEdit = () => expenseUpdate({...expense, editing:true})
    let hideEdit = () => expenseUpdate({...expense, editing:false})

    return (
      <div className='expense-item'>

        <button className='remove-button' onClick={() => expenseRemove(expense)}> x </button>
        <button onClick={showEdit} className='update-button'>&#9998;</button>
        <h3><strong> {expense.name} </strong></h3>
        <p> ${expense.price} </p>

        <Modal onClose={hideEdit} show={expense.editing} >
        <ExpenseForm onComplete = {this.handleUpdate} expense={expense} />
        </Modal>
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
