import React from 'react'
import CategoryForm from '../category-form'
import {connect} from 'react-redux'
import * as category from '../../action/category.js'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import * as expense from '../../action/expense.js'
import * as util from '../../lib/util.js'
import './category-item.scss'
import Modal from '../modal'

class CategoryItem extends React.Component {
  render(){
    let {category, categoryRemove, categoryUpdate, expenseCreate, expenses} = this.props
    let categoryExpenses = expenses[category.id]
    let showEdit = () => categoryUpdate({...category, editing:true})
    let hideEdit = () => categoryUpdate({...category, editing:false})

    return (
      <div className='category-item'>

      <section className='category-item'>
      <button className='remove-button' onClick={() => categoryRemove(category)}> x </button>
      <button onClick={showEdit} className='update-button'>&#9998;</button>
      <h3><strong>{category.name} ${category.amount} </strong></h3>
      </section>

      <Modal onClose={hideEdit} show={category.editing} >
      <section className='category-update'>
      <CategoryForm onComplete={categoryUpdate} category={category}/>
      </section>
      </Modal>
      <section>
      <ExpenseForm onComplete={expenseCreate} category={category}/>
      {categoryExpenses.map((expense, i) =>
        <ExpenseItem expense={expense} key={i} />
      )}
      </section>

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
