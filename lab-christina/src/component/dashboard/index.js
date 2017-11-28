import React from 'react'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'
import {connect} from 'react-redux'
import * as category from '../../action/category.js'
import './dashboard.scss'
import DropZone from '../drop-zone'

class Dashboard extends React.Component {
  render(){
    let { categories, categoryCreate } = this.props

    return (
      <div className='dashboard'>

        <p>Create multiple categories to keep track of your spending </p>
          <ul>
            <li className='list-header'>Suggested categories:</li>
            <li className='list'>&#8594; Groceries</li>
            <li className='list'>&#8594; Personal</li>
          </ul>
      <CategoryForm onComplete={categoryCreate} />
        {categories.map((category, i) =>
          <CategoryItem
            key={i}
            category={category}
            />
        )}
      </div>
      )
    }
  }

  let mapStateToProps = (state) => {
    return {
      categories: state.categories,
    }
  }

  let mapDispatchToProps = (dispatch) => {
    return {
      categoryCreate: (data) => dispatch(category.create(data)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
