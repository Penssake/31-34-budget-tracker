import React from 'react'
import CategoryForm from '../category-form'
import {connect} from 'react-redux'
import * as category from '../../action/category.js'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import * as expense from '../../action/expense.js'
import * as util from '../../lib/util.js'
import './category-item.scss'
import DropZone from '../drop-zone'

class CategoryItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {editing: false}
    this.handleUpdate = this.handleUpdate.bind(this)
}

  handleUpdate(category){
    this.props.categoryUpdate(category)
    this.setState({editing: false})
  }

  render(){
    let {categoryDragToSection, category, categoryRemove, categoryUpdate, expenseCreate, expenses} = this.props
    let categoryExpenses = expenses[category.id]
    let {editing} = this.state;

    return (
      <div className='category-item'>
          <section className='category-item'>
            <button className='remove-button' onClick={() => categoryRemove(category)}> x </button>
            <button onClick={() => this.setState({editing:true})} className='update-button'>&#9998;</button>
          {util.renderIf(!editing,
            <h3><strong>{category.name} ${category.amount} </strong></h3>)}
          </section>

          <section className='category-update'>
          {util.renderIf(editing,
             <CategoryForm category={category} onComplete={this.handleUpdate} />)}
          </section>

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
  categoryDragToSection: (data, categoryID) => dispatch(category.updateCategory(data, categoryID)),
  categoryRemove: (data) => dispatch(category.remove(data)),
  expenseCreate: (data) => dispatch(expense.create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
